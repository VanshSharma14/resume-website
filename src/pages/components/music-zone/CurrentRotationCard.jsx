import { useMemo, useState } from "react";

const TABS = [
  { key: "onRepeat", label: "On Repeat" },
  { key: "recentlyLoved", label: "Recently Loved" },
  { key: "topArtists", label: "Top Artists" },
];

const CurrentRotationCard = ({ data, loading, error }) => {
  const [activeTab, setActiveTab] = useState(TABS[0].key);

  const items = useMemo(() => data?.[activeTab] || [], [data, activeTab]);
  const listItems = items.slice(0, 10);

  return (
    <section className="music-zone-card music-zone-square-card music-zone-card--column">
      <div className="flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`music-zone-tab ${activeTab === tab.key ? "music-zone-tab--active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="music-zone-list-scroll mt-4 flex-1 pb-3 pr-1">
        {loading && (
          <div className="space-y-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={`rotation-skeleton-${index}`}
                className="h-[58px] rounded-xl bg-white/5 animate-pulse"
              />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-[var(--color-gold)]/25 bg-black/20 px-3 py-4 text-sm text-[var(--color-light)]/90">
            Spotify data is unavailable right now. Recheck your Spotify scopes for top tracks,
            recently played, and top artists.
          </div>
        )}

        {!loading && !error && listItems.length === 0 && (
          <div className="rounded-xl border border-[var(--color-gold)]/20 bg-black/20 px-3 py-4 text-sm text-[var(--color-light)]/80">
            Nothing here yet. Start listening and this card will populate.
          </div>
        )}

        {!loading && !error && listItems.length > 0 && (
          <div className="space-y-2">
            {listItems.map((item) => (
              <a
                key={item.id}
                href={item.url || undefined}
                target={item.url ? "_blank" : undefined}
                rel={item.url ? "noreferrer noopener" : undefined}
                className="music-zone-list-row group"
              >
                <div className="music-zone-list-thumb">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.name} cover`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-black/35 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-light)]/70">
                      No Art
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[var(--color-light)]">{item.name}</p>
                  <p className="truncate text-xs text-[var(--color-light-variant)]">{item.subtitle}</p>
                </div>
                <div className="music-zone-list-chevron" aria-hidden="true">
                  ↗
                </div>
                <div className="music-zone-list-hover" aria-hidden="true">
                  Preview on Spotify
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CurrentRotationCard;
