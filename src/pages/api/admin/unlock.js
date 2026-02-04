export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end("Method Not Allowed");
  }

  const configuredPassword = process.env.NEXT_ADMIN_CONSOLE_PASSWORD;

  if (!configuredPassword) {
    return res.status(500).json({ ok: false, error: "Admin password is not configured." });
  }

  const { password } = req.body || {};
  const isValid = typeof password === "string" && password === configuredPassword;

  if (!isValid) {
    return res.status(401).json({ ok: false });
  }

  return res.status(200).json({ ok: true });
}
