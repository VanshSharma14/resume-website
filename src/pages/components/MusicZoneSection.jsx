import { useEffect, useState } from "react";
import CurrentRotationCard from "./music-zone/CurrentRotationCard";
import CuratedPlaylistsCard from "./music-zone/CuratedPlaylistsCard";
import VinnieGoldCard from "./music-zone/VinnieGoldCard";

const VISIBLE_REFRESH_MS = 30_000;
const HIDDEN_REFRESH_MS = 120_000;

const MusicZoneSection = () => {
  const [state, setState] = useState({
    status: "loading",
    data: null,
    errors: [],
  });

  useEffect(() => {
    let isActive = true;
    let isLoading = false;
    let timeoutId;

    // Pull all music-zone data in one request so both top cards stay in sync.
    const loadMusicZone = async () => {
      if (isLoading) return;
      isLoading = true;

      try {
        const response = await fetch("/api/spotify/music-zone");

        if (!response.ok) {
          throw new Error("Music zone fetch failed");
        }

        const data = await response.json();

        if (isActive) {
          setState({
            status: "ready",
            data,
            errors: data?.errors || [],
          });
        }
      } catch (error) {
        if (isActive) {
          setState((previous) =>
            previous.data
              ? previous
              : {
                  status: "error",
                  data: null,
                  errors: [],
                }
          );
        }
      } finally {
        isLoading = false;
      }
    };

    const getRefreshDelay = () =>
      document.hidden ? HIDDEN_REFRESH_MS : VISIBLE_REFRESH_MS;

    const scheduleNext = () => {
      timeoutId = setTimeout(async () => {
        await loadMusicZone();
        if (isActive) {
          scheduleNext();
        }
      }, getRefreshDelay());
    };

    const handleVisibilityChange = async () => {
      clearTimeout(timeoutId);
      await loadMusicZone();
      if (isActive) {
        scheduleNext();
      }
    };

    loadMusicZone();
    scheduleNext();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const loading = state.status === "loading";
  const hasError = state.status === "error";
  const hasRotationError =
    hasError ||
    state.errors.includes("onRepeat") ||
    state.errors.includes("recentlyLoved") ||
    state.errors.includes("topArtists");
  const hasPlaylistError = hasError || state.errors.includes("playlists");

  return (
    <section className="mx-auto flex min-h-screen w-full max-w-[980px] flex-col px-[16px] pt-[64px] pb-[32px] sm:px-[24px] sm:pt-[80px]">
      <div>
        <h1 className="text-center text-4xl font-black tracking-[0.2em] text-[var(--color-gold)] md:text-5xl">
          MUSIC ZONE
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm font-bold tracking-[0.18em] text-[var(--color-light)]">
          LISTEN · DISCOVER · CREATE
        </p>
      </div>

      <div className="flex flex-1 items-center py-[24px] xl:pb-[128px]">
        <div className="music-zone-grid w-full">
          <CurrentRotationCard
            data={state.data?.rotation}
            loading={loading}
            error={hasRotationError}
          />
          <CuratedPlaylistsCard
            playlists={state.data?.playlists}
            loading={loading}
            error={hasPlaylistError}
          />
          <VinnieGoldCard />
        </div>
      </div>
    </section>
  );
};

export default MusicZoneSection;
