const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const getTokens = async ({ code, redirectUri }) => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  console.log("ClientID: " + process.env.clientId, )

  if (!clientId || !clientSecret) {
    return { error: "Missing Spotify client credentials" };
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  if (!response.ok) {
    return { error: "Spotify token exchange failed" };
  }

  return response.json();
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end("Method Not Allowed");
  }

  const { code } = req.query;

  if (!code) {
    return res.status(400).send("Missing ?code from Spotify authorization step.");
  }

  const host = req.headers.host;
  const protocol =
    req.headers["x-forwarded-proto"] || (host?.startsWith("localhost") ? "http" : "https");
  const redirectUri =
    process.env.SPOTIFY_REDIRECT_URI || `${protocol}://${host}/api/spotify/callback`;

  const tokenResponse = await getTokens({ code, redirectUri });

  if (tokenResponse?.error) {
    return res.status(500).send(tokenResponse.error);
  }

  const { refresh_token: refreshToken, scope } = tokenResponse;

  if (!refreshToken) {
    return res
      .status(500)
      .send("No refresh token returned. Ensure you have approved scopes.");
  }

  return res
    .status(200)
    .send(
      `Refresh token (copy once):\n\n${refreshToken}\n\nScopes: ${scope || "(unknown)"}`
    );
}
