import { readVisiblePlaylistIds } from "./playlistVisibilityStore";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const TOP_TRACKS_ENDPOINT =
  "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=30";
const TOP_ARTISTS_ENDPOINT =
  "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10";
const PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";
const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists?limit=50";

const getAccessToken = async () => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
};

const spotifyGet = async (url, accessToken) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(
      `Spotify request failed (${response.status})${details ? `: ${details}` : ""}`
    );
  }

  return response.json();
};

const stripHtml = (value = "") =>
  value
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

const shorten = (value, maxLength = 72) =>
  value.length > maxLength ? `${value.slice(0, maxLength - 1).trim()}...` : value;

const uniqueById = (items) => {
  const seen = new Set();
  return items.filter((item) => {
    if (!item?.id || seen.has(item.id)) {
      return false;
    }
    seen.add(item.id);
    return true;
  });
};

const mapTrack = (track) => {
  if (!track?.id) return null;

  return {
    id: track.id,
    name: track.name,
    subtitle: track.artists?.map((artist) => artist.name).join(", ") || "Unknown artist",
    image: track.album?.images?.[0]?.url || null,
    url: track.external_urls?.spotify || null,
    kind: "track",
  };
};

const mapArtist = (artist) => {
  if (!artist?.id) return null;

  return {
    id: artist.id,
    name: artist.name,
    subtitle: artist.genres?.slice(0, 2).join(" • ") || "Artist",
    image: artist.images?.[0]?.url || null,
    url: artist.external_urls?.spotify || null,
    kind: "artist",
  };
};

const getAllPlaylists = async (accessToken) => {
  const playlists = [];
  let next = PLAYLISTS_ENDPOINT;

  while (next) {
    const data = await spotifyGet(next, accessToken);
    playlists.push(...(data.items || []));
    next = data.next;
  }

  return playlists;
};

export const fetchMusicZoneData = async ({ includeAllPlaylists = false } = {}) => {
  const tokenResponse = await getAccessToken();

  if (!tokenResponse?.access_token) {
    throw new Error("Missing Spotify token");
  }

  const accessToken = tokenResponse.access_token;
  const errors = [];

  // Fetch all required slices in parallel so one failing endpoint does not block the rest.
  const [profileResult, topTracksResult, recentlyPlayedResult, topArtistsResult, playlistsResult] =
    await Promise.allSettled([
      spotifyGet(PROFILE_ENDPOINT, accessToken),
      spotifyGet(TOP_TRACKS_ENDPOINT, accessToken),
      spotifyGet(RECENTLY_PLAYED_ENDPOINT, accessToken),
      spotifyGet(TOP_ARTISTS_ENDPOINT, accessToken),
      getAllPlaylists(accessToken),
    ]);

  const profile = profileResult.status === "fulfilled" ? profileResult.value : null;
  const topTracks =
    topTracksResult.status === "fulfilled"
      ? (topTracksResult.value.items || []).map(mapTrack).filter(Boolean)
      : [];
  const recentlyPlayed =
    recentlyPlayedResult.status === "fulfilled"
      ? uniqueById(
          (recentlyPlayedResult.value.items || [])
            .map((entry) => mapTrack(entry.track))
            .filter(Boolean)
        )
      : [];
  const topArtists =
    topArtistsResult.status === "fulfilled"
      ? (topArtistsResult.value.items || []).map(mapArtist).filter(Boolean)
      : [];

  // Personal playlists are filtered to your account owner id.
  const ownerId = process.env.SPOTIFY_USER_ID || profile?.id;
  const allPlaylists = playlistsResult.status === "fulfilled" ? playlistsResult.value : [];
  const personalPlaylists = ownerId
    ? allPlaylists.filter((playlist) => playlist.owner?.id === ownerId)
    : [];

  const mappedPlaylists = personalPlaylists.map((playlist) => ({
    id: playlist.id,
    name: playlist.name,
    description:
      shorten(stripHtml(playlist.description || "")) || "A handpicked lane for this mood.",
    image: playlist.images?.[0]?.url || null,
    url: playlist.external_urls?.spotify || null,
    ownerId: playlist.owner?.id || null,
  }));

  const selectedPlaylistIds = await readVisiblePlaylistIds();
  const hasSavedSelection = Array.isArray(selectedPlaylistIds);
  const visiblePlaylistIdSet = new Set(
    hasSavedSelection ? selectedPlaylistIds : mappedPlaylists.map((playlist) => playlist.id)
  );
  const visiblePlaylists = mappedPlaylists.filter((playlist) =>
    visiblePlaylistIdSet.has(playlist.id)
  );

  if (profileResult.status === "rejected") errors.push("profile");
  if (topTracksResult.status === "rejected") errors.push("onRepeat");
  if (recentlyPlayedResult.status === "rejected") errors.push("recentlyLoved");
  if (topArtistsResult.status === "rejected") errors.push("topArtists");
  if (playlistsResult.status === "rejected") errors.push("playlists");
  if (!ownerId && allPlaylists.length > 0) errors.push("playlists");
  const uniqueErrors = [...new Set(errors)];

  return {
    rotation: {
      onRepeat: topTracks,
      recentlyLoved: recentlyPlayed,
      topArtists,
    },
    playlists: includeAllPlaylists ? mappedPlaylists : visiblePlaylists,
    allPlaylists: mappedPlaylists,
    selectedPlaylistIds: hasSavedSelection
      ? selectedPlaylistIds
      : mappedPlaylists.map((playlist) => playlist.id),
    hasSavedSelection,
    hasPartialData: uniqueErrors.length > 0,
    errors: uniqueErrors,
    resolvedOwnerId: ownerId || null,
  };
};
