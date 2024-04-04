import React, { useState } from "react";
import axios from "axios";

export default function UrlInputPage() {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://tunica.zapto.org:5001/scrape-website",
        {
          url: url,
        },
        {}
      );
      setResponse(res?.data);
    } catch (error) {
      setError(error);
    }
  };

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
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send URL
        </button>
      </form>
      {response && Array.isArray(response) && response.length > 0 && (
        <div className="mt-8 w-full max-w-lg bg-white p-8 rounded-lg shadow-lg overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">Response:</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                {Object.keys(response[0]).map((key) => (
                  <th key={key} className="border px-4 py-2">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {response.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx} className="border px-4 py-2">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {error && <p className="text-red-500 mt-8">Error: {error.message}</p>}
    </div>
  );
}
