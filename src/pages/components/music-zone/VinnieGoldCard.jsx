const VinnieGoldCard = () => {
  return (
    <div className="music-zone-artist-drift-shell music-zone-wide-card">
      <section
        className="music-zone-card music-zone-wide-card music-zone-artist-lock music-zone-card--column music-zone-artist-card"
      >
        <div className="music-zone-stars" aria-hidden="true" />
        <div className="music-zone-artist-content relative z-[1] flex h-full min-h-[220px] flex-1 flex-col items-center justify-center text-center">
          <p className="text-2xl font-black tracking-[0.24em] text-[var(--color-light)] md:text-3xl">
            VINNIE GOLD.
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--color-light-variant)]">
            Artist Mode Pending
          </p>
          <p className="mt-3 text-sm text-[var(--color-light-variant)]">First drop coming soon</p>
        </div>
      </section>
    </div>
  );
};

export default VinnieGoldCard;
