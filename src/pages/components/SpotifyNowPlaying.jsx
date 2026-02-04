import { useEffect, useState } from "react";

const VISIBLE_REFRESH_MS = 10_000;
const HIDDEN_REFRESH_MS = 30_000;

const SpotifyNowPlaying = ({ className = "" }) => {
  const [state, setState] = useState({ status: "loading" });
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [hasRenderedReady, setHasRenderedReady] = useState(false);

  useEffect(() => {
    let isActive = true;
    let isLoading = false;
    let timeoutId;

    // Fetches the current Spotify playback state from our API route.
    const load = async () => {
      if (isLoading) return;
      isLoading = true;

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
      } finally {
        isLoading = false;
      }
    };

    // Poll more frequently while visible, and back off when the tab is hidden.
    const getRefreshDelay = () =>
      document.hidden ? HIDDEN_REFRESH_MS : VISIBLE_REFRESH_MS;

    // Uses setTimeout (not setInterval) so each run can adapt to visibility state.
    const scheduleNext = () => {
      timeoutId = setTimeout(async () => {
        await load();
        if (isActive) {
          scheduleNext();
        }
      }, getRefreshDelay());
    };

    // Refresh immediately when visibility changes to keep the widget feeling current.
    const handleVisibilityChange = async () => {
      clearTimeout(timeoutId);
      await load();
      if (isActive) {
        scheduleNext();
      }
    };

    load();
    scheduleNext();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (state.status === "playing") {
      // Reset iframe load state when Spotify switches to a new item.
      setIframeLoaded(false);
    }
  }, [state.status, state.data?.id]);

  useEffect(() => {
    if (iframeLoaded) {
      setHasRenderedReady(true);
    }
  }, [iframeLoaded]);

  const heading = "Now Playing";

  // Hide the entire widget unless Spotify says something is currently playing.
  if (state.status !== "playing") return null;

  const { embedUrl, id } = state.data;
  const motionClass = iframeLoaded
    ? "spotify-widget--ready"
    : hasRenderedReady
      ? "spotify-widget--exit"
      : "spotify-widget--pre-enter";

  return (
    <div
      className={`spotify-widget vs-gradient-border inline-block w-fit rounded-[16px] p-2 shadow-[0_14px_44px_rgba(0,0,0,0.22)] ${motionClass} ${className}`}
    >
      <div className="text-sm ml-2 font-bold uppercase tracking-wide text-[var(--color-gold)]">
        {heading}
      </div>
      <div className="relative mt-2 h-[82px] w-[320px]">
        {!iframeLoaded && (
          <div className="absolute inset-0 rounded-2xl border border-black/10 bg-black/20 animate-pulse" />
        )}
        <iframe
          key={id}
          title="Spotify player"
          src={embedUrl}
          width="320"
          height="82"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          frameBorder="0"
          onLoad={() => setIframeLoaded(true)}
          className={`absolute inset-0 rounded-2xl border border-black/10 transition-opacity duration-300 ${iframeLoaded ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifyNowPlaying;
