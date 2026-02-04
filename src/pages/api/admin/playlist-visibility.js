import { fetchMusicZoneData } from "../../../lib/musicZoneData";
import { writeVisiblePlaylistIds } from "../../../lib/playlistVisibilityStore";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await fetchMusicZoneData({ includeAllPlaylists: true });
      return res.status(200).json({
        playlists: data.allPlaylists,
        selectedPlaylistIds: data.selectedPlaylistIds,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message || "Failed to load playlists" });
    }
  }

  if (req.method === "POST") {
    const selectedPlaylistIds = req.body?.selectedPlaylistIds;

    if (!Array.isArray(selectedPlaylistIds)) {
      return res.status(400).json({ error: "selectedPlaylistIds must be an array." });
    }

    try {
      const savedIds = await writeVisiblePlaylistIds(selectedPlaylistIds);
      return res.status(200).json({ ok: true, selectedPlaylistIds: savedIds });
    } catch (error) {
      return res.status(500).json({ error: "Failed to save playlist settings." });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end("Method Not Allowed");
}
