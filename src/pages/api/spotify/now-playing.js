const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing?additional_types=track,episode";

const getAccessToken = async () => {
  // TODO: Add SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, and SPOTIFY_REFRESH_TOKEN to your .env.local
  // TODO: Ensure the refresh token includes the `user-read-currently-playing` or `user-read-playback-state` scope.
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

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end("Method Not Allowed");
  }

  const tokenResponse = await getAccessToken();

  if (!tokenResponse?.access_token) {
    return res.status(500).json({ error: "Missing Spotify token" });
  }

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${tokenResponse.access_token}`,
    },
  });

  if (response.status === 204) {
    return res.status(204).end();
  }

  if (!response.ok) {
    return res.status(response.status).json({ error: "Spotify API error" });
  }

  const data = await response.json();
  const item = data?.item;

  if (!item) {
    return res.status(204).end();
  }

  const type = item.type;
  const id = item.id;
  const name = item.name;
  const artist =
    type === "track"
      ? item.artists?.map((artist) => artist.name).join(", ")
      : item.show?.publisher || item.show?.name;
  const url = item.external_urls?.spotify;
  const embedUrl =
    type === "episode"
      ? `https://open.spotify.com/embed/episode/${id}`
      : `https://open.spotify.com/embed/track/${id}`;

  return res.status(200).json({
    isPlaying: data.is_playing,
    type,
    id,
    name,
    artist,
    url,
    embedUrl,
  });
}
