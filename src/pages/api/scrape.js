import axios from "axios";
import { API_URL } from "@/constant";

export default async (req, res) => {
  const method = req.method;

  if (method === "POST") {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ message: "URL is required" });
    }

    try {
      const recipeRes = await axios.post(`${API_URL}/scrape`, {
        url: url,
      });
      const data = recipeRes.data;
      if (data) {
        return res.status(200).json({
          data: data,
        });
      } else {
        return res.status(500).json({ message: "Internal server error" });
      }
    } catch (error) {
      console.log("ERROR", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
};
