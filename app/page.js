"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [file, setFile] = useState(null);
  const [type, setType] = useState("pdf-to-word");
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  const backendURL = "http://72.60.78.58:4000"; // ← apna VPS IP yahan likh

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file!");

    setLoading(true);
    setDownloadUrl("");

    try {
      const formData = new FormData();

      if (type === "image-to-pdf") {
        formData.append("images", file);
      } else {
        formData.append("file", file);
      }

      const res = await axios.post(`${backendURL}/convert/${type}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        setDownloadUrl(`${backendURL}/${res.data.download}`);
      } else {
        alert("Conversion failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4">📄 File Converter</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* File type selection */}
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border p-2 w-full rounded"
          >
            <option value="pdf-to-word">PDF → Word</option>
            <option value="word-to-pdf">Word → PDF</option>
            <option value="image-to-pdf">Image → PDF</option>
          </select>

          {/* File upload */}
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept={
              type === "image-to-pdf"
                ? "image/*"
                : type === "pdf-to-word"
                ? "application/pdf"
                : ".doc,.docx"
            }
            className="border p-2 w-full rounded"
          />

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Converting..." : "Convert Now"}
          </button>
        </form>

        {/* Download link */}
        {downloadUrl && (
          <div className="mt-4 text-center">
            <p className="text-green-600 font-semibold">✅ Conversion Complete!</p>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Download File
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
