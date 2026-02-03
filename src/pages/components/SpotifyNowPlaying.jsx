import { useEffect, useState } from "react";

const REFRESH_MS = 30_000;

const SpotifyNowPlaying = ({ className = "" }) => {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let isActive = true;

    const load = async () => {
      try {
        const response = await fetch("/api/spotify/now-playing");

        if (response.status === 204) {
          if (isActive) {
            setState({ status: "idle" });
          }
          return;
        }

        if (!response.ok) {
          throw new Error("Spotify fetch failed");
        }

        const data = await response.json();

        if (isActive) {
          setState({ status: "playing", data });
        }
      } catch (error) {
        if (isActive) {
          setState({ status: "error" });
        }
      }
    };

    load();
    const interval = setInterval(load, REFRESH_MS);

    return () => {
      isActive = false;
      clearInterval(interval);
    };
  }, []);

  const heading = "Now Playing";

  // Hide the entire widget unless Spotify says something is currently playing.
  if (state.status !== "playing") return null;

  const { embedUrl } = state.data;

  return (
    <div
      className={`vs-gradient-border inline-block w-fit rounded-[16px] p-2 shadow-[0_14px_44px_rgba(0,0,0,0.22)] ${className}`}
    >
      <div className="text-sm ml-2 font-bold uppercase tracking-wide text-[var(--color-gold)]">
        {heading}
      </div>
      <div className="mt-2">
        <iframe
          title="Spotify player"
          src={embedUrl}
          width="320"
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          frameBorder="0"
          className="block rounded-2xl border border-black/10"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifyNowPlaying;
