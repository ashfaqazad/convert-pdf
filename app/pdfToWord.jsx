"use client";

import React, { useState } from "react";

export default function PdfToWord() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a PDF file first.");

    setLoading(true);
    setDownloadUrl("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      // ✅ Correct API route (must match your server.js)
      const res = await fetch("http://72.60.78.58:4000/convert/pdf-to-word", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setDownloadUrl(`http://72.60.78.58:4000${data.download}`);
      } else {
        alert("Conversion failed: " + data.error);
      }
    } catch (err) {
      alert("Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">PDF to Word Converter</h1>

        <form onSubmit={handleUpload}>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="border p-2 w-full mb-4"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Converting..." : "Convert Now"}
          </button>
        </form>

        {downloadUrl && (
          <div className="mt-6">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold"
            >
              📥 Download Converted Word File
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
