import { fetchMusicZoneData } from "../../../lib/musicZoneData";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end("Method Not Allowed");
  }

  const includeAllPlaylists = req.query?.includeAllPlaylists === "1";

  try {
    const data = await fetchMusicZoneData({ includeAllPlaylists });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message || "Music zone fetch failed" });
  }
}
