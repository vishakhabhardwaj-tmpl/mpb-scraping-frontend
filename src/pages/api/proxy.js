import { createProxyMiddleware } from "http-proxy-middleware";

const handler = (req, res) => {
  const { url } = req.query;

  if (!url) {
    res.status(400).json({ error: "Missing filename or URL" });
    return;
  }

  // Configure the proxy middleware
  const proxy = createProxyMiddleware({
    target: "http://tunica.zapto.org:5001/scrape",
    changeOrigin: true,
  });

  // Proxy the request
  req.url = url;
  proxy(req, res);
};

export default handler;
