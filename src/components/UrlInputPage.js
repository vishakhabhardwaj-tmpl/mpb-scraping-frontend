import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function UrlInputPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`/api/scrape`, {
        url: url,
      });
      setResponse(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  console.log(response);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">URL Input Page</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
      >
        <label className="block mb-4">
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="block w-full border border-gray-300 rounded px-3 py-2 mt-1"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-32 h-10 flex justify-center"
        >
          {loading ? (
            <span className="animate-spin">
              <AiOutlineLoading3Quarters size={22} />
            </span>
          ) : (
            "Fetch Recipe"
          )}
        </button>
      </form>
      {response && (
        <div className="mt-8 w-full max-w-5xl bg-white p-8 rounded-lg shadow-md overflow-x-auto prose lg:prose-xl">
          <h2 className="text-2xl font-bold mb-4">Response:</h2>
          <Markdown remarkPlugins={[remarkGfm]}>{response}</Markdown>
        </div>
      )}
      {error && <p className="text-red-500 mt-8">Error: {error.message}</p>}
    </div>
  );
}
