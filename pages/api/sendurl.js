// pages/api/send-url.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { url } = req.body;
      // Perform any necessary operations with the URL
      res.status(200).json({ message: "URL received", url });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
