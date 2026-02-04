import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

const AdminModePage = () => {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylistIds, setSelectedPlaylistIds] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [loadingPlaylists, setLoadingPlaylists] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const handleUnlock = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/unlock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error("Invalid password");
      }

      setIsUnlocked(true);
      setPassword("");
    } catch (unlockError) {
      setError("Nope. Access denied.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isUnlocked) return;

    let isActive = true;
    setLoadingPlaylists(true);
    setSaveMessage("");

    const loadPlaylists = async () => {
      try {
        const response = await fetch("/api/admin/playlist-visibility");
        if (!response.ok) {
          throw new Error("Failed to load playlists");
        }
        const data = await response.json();
        if (isActive) {
          setPlaylists(data.playlists || []);
          setSelectedPlaylistIds(data.selectedPlaylistIds || []);
        }
      } catch {
        if (isActive) {
          setSaveMessage("Could not load playlist controls right now.");
        }
      } finally {
        if (isActive) {
          setLoadingPlaylists(false);
        }
      }
    };

    loadPlaylists();

    return () => {
      isActive = false;
    };
  }, [isUnlocked]);

  const filteredPlaylists = useMemo(() => {
    const normalizedFilter = filterText.trim().toLowerCase();
    if (!normalizedFilter) return playlists;
    return playlists.filter((playlist) =>
      playlist.name.toLowerCase().includes(normalizedFilter)
    );
  }, [playlists, filterText]);

  const handleTogglePlaylist = (playlistId) => {
    setSelectedPlaylistIds((previous) =>
      previous.includes(playlistId)
        ? previous.filter((id) => id !== playlistId)
        : [...previous, playlistId]
    );
  };

  const handleSaveSelection = async () => {
    setIsSaving(true);
    setSaveMessage("");

    try {
      const response = await fetch("/api/admin/playlist-visibility", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedPlaylistIds }),
      });

      if (!response.ok) {
        throw new Error("Save failed");
      }

      setSaveMessage("Saved. Discover tab now uses this selection.");
    } catch {
      setSaveMessage("Could not save selection.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Mode - Vansh Sharma</title>
      </Head>
      <main className="min-h-screen px-4 py-10 md:flex md:items-center md:justify-center md:px-6 md:py-14 bg-gradient-to-br from-[var(--color-dark-bold)] via-[#2d2f2f] to-[#4a4638]">
        <div className="mx-auto w-[min(900px,100%)]">
          {!isUnlocked && (
            <section className="rounded-3xl border border-[var(--color-gold)]/35 bg-black/35 p-8 md:p-12 backdrop-blur-md shadow-[0_20px_48px_rgba(0,0,0,0.35)]">
              <p className="text-2xl leading-relaxed md:text-3xl">
                <span className="font-black text-[var(--color-gold)]">Oh!</span>{" "}
                <span className="text-[var(--color-light)]">
                  looks like you&apos;ve stumbled accross an easter egg to access my admin
                  console, so do you know what&apos;s real?
                </span>
              </p>

              <form onSubmit={handleUnlock} className="mt-8 max-w-md">
                <label
                  htmlFor="admin-password"
                  className="mb-2 block text-xs uppercase tracking-[0.16em] text-[var(--color-light)]"
                >
                  Password
                </label>
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter admin password"
                  className="w-full rounded-xl border border-[var(--color-gold)]/40 bg-black/30 px-4 py-3 text-[var(--color-light)] placeholder:text-[var(--color-light)]/45 outline-none transition focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/25"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || password.length === 0}
                  className="mt-4 rounded-xl border border-[var(--color-gold)]/50 bg-[var(--color-gold)]/15 px-4 py-2 text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-gold)] transition hover:bg-[var(--color-gold)]/25 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Checking..." : "Unlock Console"}
                </button>
              </form>

              {error && <p className="mt-3 text-sm text-red-300">{error}</p>}
            </section>
          )}

          {isUnlocked && (
            <section className="rounded-3xl border border-[var(--color-gold)]/45 bg-black/40 p-8 md:p-12 backdrop-blur-md shadow-[0_20px_48px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]/90">
                Admin Console
              </p>
              <h1 className="mt-2 text-3xl font-black text-[var(--color-light)] md:text-4xl">
                Access Granted.
              </h1>
              <p className="mt-3 max-w-2xl text-[var(--color-light)]/80">
                Choose which playlists are visible in your Discover card.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-semibold text-[var(--color-light)]">
                    Discover Playlist Visibility
                  </p>
                  <input
                    type="text"
                    value={filterText}
                    onChange={(event) => setFilterText(event.target.value)}
                    placeholder="Filter playlist names..."
                    className="w-full rounded-lg border border-white/20 bg-black/35 px-3 py-2 text-sm text-[var(--color-light)] outline-none transition sm:max-w-[260px] focus:border-[var(--color-gold)]/65"
                  />
                </div>

                <div className="mt-4 max-h-[320px] overflow-y-auto rounded-xl border border-white/10 bg-black/20 p-3">
                  {loadingPlaylists && (
                    <p className="text-sm text-[var(--color-light)]/70">Loading playlists...</p>
                  )}

                  {!loadingPlaylists && filteredPlaylists.length === 0 && (
                    <p className="text-sm text-[var(--color-light)]/65">
                      No playlists found for this filter.
                    </p>
                  )}

                  {!loadingPlaylists && filteredPlaylists.length > 0 && (
                    <div className="space-y-2">
                      {filteredPlaylists.map((playlist) => (
                        <label
                          key={playlist.id}
                          className="flex cursor-pointer items-center justify-between rounded-lg border border-white/10 bg-black/20 px-3 py-2 transition hover:border-[var(--color-gold)]/45"
                        >
                          <span className="truncate pr-3 text-sm text-[var(--color-light)]">
                            {playlist.name}
                          </span>
                          <input
                            type="checkbox"
                            checked={selectedPlaylistIds.includes(playlist.id)}
                            onChange={() => handleTogglePlaylist(playlist.id)}
                            className="h-4 w-4 accent-[var(--color-gold)]"
                          />
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-[var(--color-light)]/70">
                    Selected: {selectedPlaylistIds.length}
                  </p>
                  <button
                    type="button"
                    onClick={handleSaveSelection}
                    disabled={isSaving || loadingPlaylists}
                    className="rounded-lg border border-[var(--color-gold)]/50 bg-[var(--color-gold)]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-gold)] transition hover:bg-[var(--color-gold)]/25 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSaving ? "Saving..." : "Save Playlist Selection"}
                  </button>
                </div>

                {saveMessage && <p className="mt-3 text-xs text-[var(--color-light)]/85">{saveMessage}</p>}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
};

export default AdminModePage;
