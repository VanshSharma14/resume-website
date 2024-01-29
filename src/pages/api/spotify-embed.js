// nextjs api route that returns spotify embed html
import spotifyAuth from "../../../public/scripts/getSpotifyEmbed";

export default async function handler(req, res) {
  spotifyAuth(process.env.SPOTIFY_CLIENT_ID, process.env.SPOTIFY_CLIENT_SECRET);
}
