import { useEffect, useMemo, useState } from "react";

const MOODS = ["Chill", "Focus", "Late Night", "Emotional", "Hype"];

const MOOD_DESCRIPTIONS = {
  Chill: "warm lights, tea, and no rush",
  Focus: "headphones on, world off",
  "Late Night": "city lights after midnight",
  Emotional: "slow burn and honest lyrics",
  Hype: "high tempo, high confidence",
};

const inferMood = (playlistName = "", index = 0) => {
  const name = playlistName.toLowerCase();

  if (name.includes("chill") || name.includes("calm") || name.includes("lofi")) {
    return "Chill";
  }
  if (name.includes("focus") || name.includes("study") || name.includes("work")) {
    return "Focus";
  }
  if (name.includes("night") || name.includes("midnight") || name.includes("after dark")) {
    return "Late Night";
  }
  if (name.includes("sad") || name.includes("feels") || name.includes("heart")) {
    return "Emotional";
  }
  if (name.includes("hype") || name.includes("gym") || name.includes("energy")) {
    return "Hype";
  }

  return MOODS[index % MOODS.length];
};

const CuratedPlaylistsCard = ({ playlists, loading, error }) => {
  const playlistsWithMood = useMemo(
    () =>
      (playlists || []).map((playlist, index) => ({
        ...playlist,
        mood: inferMood(playlist.name, index),
      })),
    [playlists]
  );

  const [activeMood, setActiveMood] = useState(MOODS[0]);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);

  const highlightedPlaylists = useMemo(
    () => playlistsWithMood.filter((playlist) => playlist.mood === activeMood),
    [playlistsWithMood, activeMood]
  );
  const visiblePlaylists = highlightedPlaylists.length
    ? highlightedPlaylists
    : playlistsWithMood;

  const firstHighlightId = highlightedPlaylists[0]?.id;

  useEffect(() => {
    // Keep a visible highlight aligned with the current mood lane.
    if (!highlightedPlaylists.find((playlist) => playlist.id === selectedPlaylistId)) {
      setSelectedPlaylistId(firstHighlightId || null);
    }
  }, [highlightedPlaylists, selectedPlaylistId, firstHighlightId]);

  return (
    <section className="music-zone-card music-zone-square-card music-zone-card--column">
      <div className="music-zone-playlist-scroll music-zone-playlist-grid pr-1">
        {loading && (
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`playlist-skeleton-${index}`}
                className="aspect-square rounded-xl bg-white/5 animate-pulse"
              />
            ))}
          </>
        )}

        {!loading && error && (
          <div className="col-span-2 rounded-xl border border-[var(--color-gold)]/25 bg-black/20 px-3 py-4 text-sm text-[var(--color-light)]/90">
            Playlist data is unavailable right now. Check playlist scopes on your Spotify token.
          </div>
        )}

        {!loading && !error && playlistsWithMood.length === 0 && (
          <div className="col-span-2 rounded-xl border border-[var(--color-gold)]/20 bg-black/20 px-3 py-4 text-sm text-[var(--color-light)]/80">
            No discover playlists are enabled right now.
          </div>
        )}

        {!loading &&
          !error &&
          visiblePlaylists.map((playlist) => {
            const isActiveMood = playlist.mood === activeMood;
            const isSelected = (selectedPlaylistId || firstHighlightId) === playlist.id;

            return (
              <a
                key={playlist.id}
                href={playlist.url || undefined}
                target={playlist.url ? "_blank" : undefined}
                rel={playlist.url ? "noreferrer noopener" : undefined}
                onMouseEnter={() => setSelectedPlaylistId(playlist.id)}
                className={`music-zone-art-tile group ${isActiveMood ? "opacity-100" : ""} ${
                  isSelected ? "music-zone-playlist--selected" : ""
                }`}
              >
                <div className="music-zone-art-media">
                  {playlist.image ? (
                    <img
                      src={playlist.image}
                      alt={`${playlist.name} cover`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-black/35 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-light)]/70">
                      No Cover
                    </div>
                  )}
                </div>
                <div className="music-zone-art-overlay">
                  <p className="music-zone-art-title">{playlist.name}</p>
                  <p className="music-zone-art-subtitle music-zone-vibe-text">
                    {playlist.description || MOOD_DESCRIPTIONS[playlist.mood]}
                  </p>
                </div>
              </a>
            );
          })}
      </div>

      <div className="mt-5 border-t border-white/10 pt-3">
        <p className="text-xs tracking-[0.16em] text-[var(--color-light)]">Mood Finder</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {MOODS.map((mood) => (
            <button
              key={mood}
              type="button"
              onClick={() => setActiveMood(mood)}
              className={`music-zone-mood-pill ${
                activeMood === mood ? "music-zone-mood-pill--active" : ""
              }`}
            >
              {mood}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedPlaylistsCard;
