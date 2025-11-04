import React from 'react'
import PdfToWord from './pdfToWord'

const page = () => {
  return (
    <div>
      <PdfToWord />
    </div>
  )
}

export default page
























// "use client";

// import { useState } from "react";
// import axios from "axios";

// export default function Home() {
//   const [file, setFile] = useState(null);
//   const [type, setType] = useState("pdf-to-word");
//   const [loading, setLoading] = useState(false);
//   const [downloadUrl, setDownloadUrl] = useState("");
//   const [error, setError] = useState("");

//   const backendURL = "http://72.60.78.58:4000"; // Your VPS backend

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       setError("Please select a file!");
//       return;
//     }

//     setLoading(true);
//     setDownloadUrl("");
//     setError("");

//     try {
//       const formData = new FormData();
//       if (type === "image-to-pdf") {
//         formData.append("images", file);
//       } else {
//         formData.append("file", file);
//       }

//       const res = await axios.post(`${backendURL}/convert/${type}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       if (res.data.success) {
//         const download = res.data.download;
//         const fullDownloadUrl = `${backendURL}${download.startsWith("/") ? download : "/" + download}`;
//         setDownloadUrl(fullDownloadUrl); // Set download URL to show link
//       } else {
//         setError(`Conversion failed: ${res.data.error}`);
//       }
//     } catch (err) {
//       console.error("Axios Error:", err);
//       setError(err.response?.data?.error || "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
//       <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
//         <h1 className="text-2xl font-bold text-center mb-4">📄 File Converter</h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* File type selection */}
//           <select
//             value={type}
//             onChange={(e) => {
//               setType(e.target.value);
//               setFile(null); // Reset file on type change
//               setDownloadUrl("");
//               setError("");
//             }}
//             className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="pdf-to-word">PDF → Word</option>
//             <option value="word-to-pdf">Word → PDF</option>
//             <option value="image-to-pdf">Image → PDF</option>
//           </select>

//           {/* File upload */}
//           <input
//             type="file"
//             onChange={(e) => {
//               setFile(e.target.files[0]);
//               setError("");
//             }}
//             accept={
//               type === "image-to-pdf"
//                 ? "image/jpeg,image/png"
//                 : type === "pdf-to-word"
//                   ? "application/pdf"
//                   : ".doc,.docx"
//             }
//             className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Submit button */}
//           <button
//             type="submit"
//             disabled={loading || !file}
//             className={`w-full py-2 rounded text-white ${
//               loading || !file ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             {loading ? "Converting..." : "Convert Now"}
//           </button>
//         </form>

//         {/* Error message */}
//         {error && (
//           <div className="mt-4 text-center">
//             <p className="text-red-600 font-semibold">❌ {error}</p>
//           </div>
//         )}

//         {/* Download link */}
//         {downloadUrl && (
//           <div className="mt-4 text-center">
//             <p className="text-green-600 font-semibold">✅ Conversion Complete!</p>
//             <a
//               href={downloadUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 underline hover:text-blue-700"
//             >
//               Download File
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




















// // "use client";

// // import { useState } from "react";
// // import axios from "axios";

// // export default function Home() {
// //   const [file, setFile] = useState(null);
// //   const [type, setType] = useState("pdf-to-word");
// //   const [loading, setLoading] = useState(false);
// //   const [downloadUrl, setDownloadUrl] = useState("");
// //   const [error, setError] = useState("");

// //   const backendURL = "http://72.60.78.58:4000"; // Your VPS backend

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!file) {
// //       setError("Please select a file!");
// //       return;
// //     }

// //     setLoading(true);
// //     setDownloadUrl("");
// //     setError("");

// //     try {
// //       const formData = new FormData();
// //       if (type === "image-to-pdf") {
// //         formData.append("images", file);
// //       } else {
// //         formData.append("file", file);
// //       }

// //       const res = await axios.post(`${backendURL}/convert/${type}`, formData, {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       });

// //       if (res.data.success) {
// //         const download = res.data.download;
// //         const fullDownloadUrl = `${backendURL}${download.startsWith("/") ? download : "/" + download}`;
// //         setDownloadUrl(fullDownloadUrl); // Set download URL to show link
// //       } else {
// //         setError(`Conversion failed: ${res.data.error}`);
// //       }
// //     } catch (err) {
// //       console.error("Axios Error:", err);
// //       setError(err.response?.data?.error || "Something went wrong. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
// //       <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
// //         <h1 className="text-2xl font-bold text-center mb-4">📄 File Converter</h1>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           {/* File type selection */}
// //           <select
// //             value={type}
// //             onChange={(e) => {
// //               setType(e.target.value);
// //               setFile(null); // Reset file on type change
// //               setDownloadUrl("");
// //               setError("");
// //             }}
// //             className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           >
// //             <option value="pdf-to-word">PDF → Word</option>
// //             <option value="word-to-pdf">Word → PDF</option>
// //             <option value="image-to-pdf">Image → PDF</option>
// //           </select>

// //           {/* File upload */}
// //           <input
// //             type="file"
// //             onChange={(e) => {
// //               setFile(e.target.files[0]);
// //               setError("");
// //             }}
// //             accept={
// //               type === "image-to-pdf"
// //                 ? "image/jpeg,image/png"
// //                 : type === "pdf-to-word"
// //                   ? "application/pdf"
// //                   : ".doc,.docx"
// //             }
// //             className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />

// //           {/* Submit button */}
// //           <button
// //             type="submit"
// //             disabled={loading || !file}
// //             className={`w-full py-2 rounded text-white ${
// //               loading || !file ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
// //             }`}
// //           >
// //             {loading ? "Converting..." : "Convert Now"}
// //           </button>
// //         </form>

// //         {/* Error message */}
// //         {error && (
// //           <div className="mt-4 text-center">
// //             <p className="text-red-600 font-semibold">❌ {error}</p>
// //           </div>
// //         )}

// //         {/* Download link */}
// //         {downloadUrl && (
// //           <div className="mt-4 text-center">
// //             <p className="text-green-600 font-semibold">✅ Conversion Complete!</p>
// //             <a
// //               href={downloadUrl}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-blue-500 underline hover:text-blue-700"
// //             >
// //               Download File
// //             </a>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }






















// // // "use client";

// // // import { useState } from "react";
// // // import axios from "axios";

// // // export default function Home() {
// // //   const [file, setFile] = useState(null);
// // //   const [type, setType] = useState("pdf-to-word");
// // //   const [loading, setLoading] = useState(false);
// // //   const [downloadUrl, setDownloadUrl] = useState("");
// // //   const [error, setError] = useState("");

// // //   const backendURL = "http://72.60.78.58:4000"; // Your VPS backend

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!file) {
// // //       setError("Please select a file!");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     setDownloadUrl("");
// // //     setError("");

// // //     try {
// // //       const formData = new FormData();
// // //       if (type === "image-to-pdf") {
// // //         formData.append("images", file);
// // //       } else {
// // //         formData.append("file", file);
// // //       }

// // //       const res = await axios.post(`${backendURL}/convert/${type}`, formData, {
// // //         headers: { "Content-Type": "multipart/form-data" },
// // //       });

// // //       if (res.data.success) {
// // //         const download = res.data.download;
// // //         const fullDownloadUrl = `${backendURL}${download.startsWith("/") ? download : "/" + download}`;
// // //         setDownloadUrl(fullDownloadUrl); // Set download URL to show link
// // //       } else {
// // //         setError("Conversion failed: " + res.data.error);
// // //       }
// // //     } catch (err) {
// // //       console.error("Axios Error:", err);
// // //       setError(err.response?.data?.error || "Something went wrong. Please try again.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
// // //       <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
// // //         <h1 className="text-2xl font-bold text-center mb-4">📄 File Converter</h1>

// // //         <form onSubmit={handleSubmit} className="space-y-4">
// // //           {/* File type selection */}
// // //           <select
// // //             value={type}
// // //             onChange={(e) => {
// // //               setType(e.target.value);
// // //               setFile(null); // Reset file on type change
// // //               setDownloadUrl("");
// // //               setError("");
// // //             }}
// // //             className="border p-2 w-full rounded"
// // //           >
// // //             <option value="pdf-to-word">PDF → Word</option>
// // //             <option value="word-to-pdf">Word → PDF</option>
// // //             <option value="image-to-pdf">Image → PDF</option>
// // //           </select>

// // //           {/* File upload */}
// // //           <input
// // //             type="file"
// // //             onChange={(e) => {
// // //               setFile(e.target.files[0]);
// // //               setError("");
// // //             }}
// // //             accept={
// // //               type === "image-to-pdf"
// // //                 ? "image/jpeg,image/png"
// // //                 : type === "pdf-to-word"
// // //                   ? "application/pdf"
// // //                   : ".doc,.docx"
// // //             }
// // //             className="border p-2 w-full rounded"
// // //           />

// // //           {/* Submit button */}
// // //           <button
// // //             type="submit"
// // //             disabled={loading || !file}
// // //             className={`w-full py-2 rounded text-white ${
// // //               loading || !file ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
// // //             }`}
// // //           >
// // //             {loading ? "Converting..." : "Convert Now"}
// // //           </button>
// // //         </form>

// // //         {/* Error message */}
// // //         {error && (
// // //           <div className="mt-4 text-center">
// // //             <p className="text-red-600 font-semibold">❌ {error}</p>
// // //           </div>
// // //         )}

// // //         {/* Download link */}
// // //         {downloadUrl && (
// // //           <div className="mt-4 text-center">
// // //             <p className="text-green-600 font-semibold">✅ Conversion Complete!</p>
// // //             <a
// // //               href={downloadUrl}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="text-blue-500 underline hover:text-blue-700"
// // //             >
// // //               Download File
// // //             </a>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }






















// // // // "use client";

// // // // import { useState } from "react";
// // // // import axios from "axios";

// // // // export default function Home() {
// // // //   const [file, setFile] = useState(null);
// // // //   const [type, setType] = useState("pdf-to-word");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [downloadUrl, setDownloadUrl] = useState("");
// // // //   const [error, setError] = useState("");

// // // //   const backendURL = "http://72.60.78.58:4000"; // Your VPS backend

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     if (!file) {
// // // //       setError("Please select a file!");
// // // //       return;
// // // //     }

// // // //     setLoading(true);
// // // //     setDownloadUrl("");
// // // //     setError("");

// // // //     try {
// // // //       const formData = new FormData();
// // // //       if (type === "image-to-pdf") {
// // // //         formData.append("images", file);
// // // //       } else {
// // // //         formData.append("file", file);
// // // //       }

// // // //       const res = await axios.post(`${backendURL}/convert/${type}`, formData, {
// // // //         headers: { "Content-Type": "multipart/form-data" },
// // // //       });

// // // //       if (res.data.success) {
// // // //         const download = res.data.download;
// // // //         const fullDownloadUrl = `${backendURL}${download.startsWith("/") ? download : "/" + download}`;
// // // //         setDownloadUrl(fullDownloadUrl);
// // // //         // Automatically trigger download
// // // //         const link = document.createElement("a");
// // // //         link.href = fullDownloadUrl;
// // // //         link.download = download.split("/").pop(); // Extract filename
// // // //         document.body.appendChild(link);
// // // //         link.click();
// // // //         document.body.removeChild(link);
// // // //       } else {
// // // //         setError("Conversion failed: " + res.data.error);
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Axios Error:", err);
// // // //       setError(err.response?.data?.error || "Something went wrong. Please try again.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
// // // //       <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
// // // //         <h1 className="text-2xl font-bold text-center mb-4">📄 File Converter</h1>

// // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // //           {/* File type selection */}
// // // //           <select
// // // //             value={type}
// // // //             onChange={(e) => {
// // // //               setType(e.target.value);
// // // //               setFile(null); // Reset file on type change
// // // //               setDownloadUrl("");
// // // //               setError("");
// // // //             }}
// // // //             className="border p-2 w-full rounded"
// // // //           >
// // // //             <option value="pdf-to-word">PDF → Word</option>
// // // //             <option value="word-to-pdf">Word → PDF</option>
// // // //             <option value="image-to-pdf">Image → PDF</option>
// // // //           </select>

// // // //           {/* File upload */}
// // // //           <input
// // // //             type="file"
// // // //             onChange={(e) => {
// // // //               setFile(e.target.files[0]);
// // // //               setError("");
// // // //             }}
// // // //             accept={
// // // //               type === "image-to-pdf"
// // // //                 ? "image/jpeg,image/png"
// // // //                 : type === "pdf-to-word"
// // // //                   ? "application/pdf"
// // // //                   : ".doc,.docx"
// // // //             }
// // // //             className="border p-2 w-full rounded"
// // // //           />

// // // //           {/* Submit button */}
// // // //           <button
// // // //             type="submit"
// // // //             disabled={loading || !file}
// // // //             className={`w-full py-2 rounded text-white ${
// // // //               loading || !file ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
// // // //             }`}
// // // //           >
// // // //             {loading ? "Converting..." : "Convert Now"}
// // // //           </button>
// // // //         </form>

// // // //         {/* Error message */}
// // // //         {error && (
// // // //           <div className="mt-4 text-center">
// // // //             <p className="text-red-600 font-semibold">❌ {error}</p>
// // // //           </div>
// // // //         )}

// // // //         {/* Download link */}
// // // //         {downloadUrl && (
// // // //           <div className="mt-4 text-center">
// // // //             <p className="text-green-600 font-semibold">✅ Conversion Complete!</p>
// // // //             <a
// // // //               href={downloadUrl}
// // // //               target="_blank"
// // // //               rel="noopener noreferrer"
// // // //               className="text-blue-500 underline"
// // // //             >
// // // //               Download File
// // // //             </a>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
























// // // // // import express from "express";
// // // // // import cors from "cors";
// // // // // import multer from "multer";
// // // // // import fs from "fs-extra";
// // // // // import path from "path";
// // // // // import { fileURLToPath } from "url";
// // // // // import libre from "libreoffice-convert";
// // // // // import { exec } from "child_process";

// // // // // const app = express();
// // // // // app.use(cors());
// // // // // const PORT = 4000;

// // // // // const __filename = fileURLToPath(import.meta.url);
// // // // // const __dirname = path.dirname(__filename);

// // // // // // Ensure folders exist
// // // // // const uploadDir = path.join(__dirname, "uploads");
// // // // // const convertedDir = path.join(__dirname, "converted");
// // // // // fs.ensureDirSync(uploadDir);
// // // // // fs.ensureDirSync(convertedDir);

// // // // // // Multer setup
// // // // // const storage = multer.diskStorage({
// // // // //   destination: (req, file, cb) => cb(null, uploadDir),
// // // // //   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// // // // // });
// // // // // const upload = multer({ storage });

// // // // // // Debug static middleware
// // // // // console.log("Serving static files from:", convertedDir);
// // // // // app.use("/converted", (req, res, next) => {
// // // // //   console.log("Request for:", req.url);
// // // // //   next();
// // // // // }, express.static(convertedDir));

// // // // // // Root route
// // // // // app.get("/", (req, res) => {
// // // // //   res.send("✅ PDF Converter API is running successfully!");
// // // // // });

// // // // // // PDF → Word
// // // // // app.post("/convert/pdf-to-word", upload.single("file"), async (req, res) => {
// // // // //   try {
// // // // //     if (!req.file) throw new Error("No file uploaded");
// // // // //     const inputPath = req.file.path;
// // // // //     const outputFile = `${Date.now()}-converted.docx`;
// // // // //     const outputPath = path.join(convertedDir, outputFile);
// // // // //     console.log("PDF→Word Input:", inputPath, "Output:", outputPath);
// // // // //     const file = fs.readFileSync(inputPath);
// // // // //     libre.convert(file, ".docx", undefined, (err, done) => {
// // // // //       if (err) {
// // // // //         console.error("libre Error:", err);
// // // // //         return res.status(500).json({ error: err.message });
// // // // //       }
// // // // //       fs.writeFileSync(outputPath, done);
// // // // //       if (fs.existsSync(outputPath)) {
// // // // //         return res.json({
// // // // //           success: true,
// // // // //           download: `/converted/${outputFile}`,
// // // // //         });
// // // // //       } else {
// // // // //         return res.status(500).json({ error: "Output file not found" });
// // // // //       }
// // // // //     });
// // // // //   } catch (error) {
// // // // //     console.error("❌ PDF→Word Error:", error);
// // // // //     res.status(500).json({ error: error.message });
// // // // //   }
// // // // // });

// // // // // // Word → PDF
// // // // // app.post("/convert/word-to-pdf", upload.single("file"), async (req, res) => {
// // // // //   try {
// // // // //     if (!req.file) throw new Error("No file uploaded");
// // // // //     const inputPath = req.file.path;
// // // // //     const inputFileName = path.basename(inputPath, path.extname(inputPath));
// // // // //     const outputFile = `${Date.now()}-converted.pdf`;
// // // // //     const outputPath = path.join(convertedDir, outputFile);
// // // // //     const sofficeOutputFile = path.join(convertedDir, `${inputFileName}.pdf`);
// // // // //     const command = `/usr/bin/soffice --headless --convert-to pdf "${inputPath}" --outdir "${convertedDir}"`;
// // // // //     console.log("Executing command:", command);
// // // // //     exec(command, (error) => {
// // // // //       if (error) {
// // // // //         console.error("soffice Error:", error);
// // // // //         return res.status(500).json({ error: error.message });
// // // // //       }
// // // // //       if (fs.existsSync(sofficeOutputFile)) {
// // // // //         fs.renameSync(sofficeOutputFile, outputPath);
// // // // //         if (fs.existsSync(outputPath)) {
// // // // //           return res.json({
// // // // //             success: true,
// // // // //             download: `/converted/${outputFile}`,
// // // // //           });
// // // // //         } else {
// // // // //           return res.status(500).json({ error: "Failed to rename output file" });
// // // // //         }
// // // // //       } else {
// // // // //         return res.status(500).json({ error: "Output file not found" });
// // // // //       }
// // // // //     });
// // // // //   } catch (error) {
// // // // //     console.error("❌ Word→PDF Error:", error);
// // // // //     res.status(500).json({ error: error.message });
// // // // //   }
// // // // // });

// // // // // // Image(s) → PDF
// // // // // app.post("/convert/image-to-pdf", upload.array("images", 10), async (req, res) => {
// // // // //   try {
// // // // //     if (!req.files || req.files.length === 0) throw new Error("No images uploaded");
// // // // //     const { PDFDocument } = await import("pdf-lib");
// // // // //     const pdfDoc = await PDFDocument.create();
// // // // //     for (const file of req.files) {
// // // // //       const imageBytes = await fs.readFile(file.path);
// // // // //       let img;
// // // // //       if (file.mimetype === "image/jpeg") img = await pdfDoc.embedJpg(imageBytes);
// // // // //       else if (file.mimetype === "image/png") img = await pdfDoc.embedPng(imageBytes);
// // // // //       else throw new Error("Unsupported image format");
// // // // //       const page = pdfDoc.addPage([img.width, img.height]);
// // // // //       page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
// // // // //     }
// // // // //     const pdfBytes = await pdfDoc.save();
// // // // //     const outputFile = `${Date.now()}-images.pdf`;
// // // // //     const outputPath = path.join(convertedDir, outputFile);
// // // // //     await fs.writeFile(outputPath, pdfBytes);
// // // // //     if (fs.existsSync(outputPath)) {
// // // // //       return res.json({
// // // // //         success: true,
// // // // //         download: `/converted/${outputFile}`,
// // // // //       });
// // // // //     } else {
// // // // //       return res.status(500).json({ error: "Output file not found" });
// // // // //     }
// // // // //   } catch (error) {
// // // // //     console.error("❌ Image→PDF Error:", error);
// // // // //     res.status(500).json({ error: error.message });
// // // // //   }
// // // // // });

// // // // // // Global error catcher
// // // // // app.use((err, req, res, next) => {
// // // // //   console.error("🔥 Global Error:", err);
// // // // //   res.status(500).json({ error: err.message });
// // // // // });

// // // // // app.listen(PORT, "0.0.0.0", () => {
// // // // //   console.log(`🚀 Server running on http://72.60.78.58:${PORT}`);
// // // // // });



















// // // // // // "use client";

// // // // // // import { useState } from "react";
// // // // // // import axios from "axios";

// // // // // // export default function Home() {
// // // // // //   const [file, setFile] = useState(null);
// // // // // //   const [type, setType] = useState("pdf-to-word");
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [downloadUrl, setDownloadUrl] = useState("");

// // // // // //   const backendURL = "http://72.60.78.58:4000"; // ← tumhara VPS backend

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     if (!file) return alert("Please select a file!");

// // // // // //     setLoading(true);
// // // // // //     setDownloadUrl("");

// // // // // //     try {
// // // // // //       const formData = new FormData();
// // // // // //       if (type === "image-to-pdf") {
// // // // // //         formData.append("images", file);
// // // // // //       } else {
// // // // // //         formData.append("file", file);
// // // // // //       }

// // // // // //       const res = await axios.post(`${backendURL}/convert/${type}`, formData, {
// // // // // //         headers: { "Content-Type": "multipart/form-data" },
// // // // // //       });

// // // // // //       if (res.data.success) {
// // // // // //         const download = res.data.download;

// // // // // //         // ✅ Direct file open karo (important fix)
// // // // // //         // window.open(`${backendURL}${download}`, "_blank");
// // // // // //         // window.open(`${backendURL}/${download.replace(/^\/+/, "")}`, "_blank");
// // // // // //         // window.open(`${backendURL}${download}`, "_blank");
// // // // // //         // console.log(backendURL + download);

// // // // // //         // window.open(`${backendURL}${download.startsWith("/") ? download : "/" + download}`, "_blank");



// // // // // //         // ✅ Also show download link if needed
// // // // // //         setDownloadUrl(`${backendURL}${download}`);
// // // // // //       } else {
// // // // // //         alert("Conversion failed!");
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //       alert("Error: " + err.message);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
// // // // // //       <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
// // // // // //         <h1 className="text-2xl font-bold text-center mb-4">📄 File Converter</h1>

// // // // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // // // //           {/* File type selection */}
// // // // // //           <select
// // // // // //             value={type}
// // // // // //             onChange={(e) => setType(e.target.value)}
// // // // // //             className="border p-2 w-full rounded"
// // // // // //           >
// // // // // //             <option value="pdf-to-word">PDF → Word</option>
// // // // // //             <option value="word-to-pdf">Word → PDF</option>
// // // // // //             <option value="image-to-pdf">Image → PDF</option>
// // // // // //           </select>

// // // // // //           {/* File upload */}
// // // // // //           <input
// // // // // //             type="file"
// // // // // //             onChange={(e) => setFile(e.target.files[0])}
// // // // // //             accept={
// // // // // //               type === "image-to-pdf"
// // // // // //                 ? "image/*"
// // // // // //                 : type === "pdf-to-word"
// // // // // //                   ? "application/pdf"
// // // // // //                   : ".doc,.docx"
// // // // // //             }
// // // // // //             className="border p-2 w-full rounded"
// // // // // //           />

// // // // // //           {/* Submit button */}
// // // // // //           <button
// // // // // //             type="submit"
// // // // // //             disabled={loading}
// // // // // //             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// // // // // //           >
// // // // // //             {loading ? "Converting..." : "Convert Now"}
// // // // // //           </button>
// // // // // //         </form>

// // // // // //         {/* Download link */}
// // // // // //         {downloadUrl && (
// // // // // //           <div className="mt-4 text-center">
// // // // // //             <p className="text-green-600 font-semibold">✅ Conversion Complete!</p>
// // // // // //             <a
// // // // // //               href={downloadUrl}
// // // // // //               target="_blank"
// // // // // //               rel="noopener noreferrer"
// // // // // //               className="text-blue-500 underline"
// // // // // //             >
// // // // // //               Download File
// // // // // //             </a>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }















// // // // // // "use client";

// // // // // // import { useState } from "react";
// // // // // // import axios from "axios";

// // // // // // export default function Home() {
// // // // // //   const [file, setFile] = useState(null);
// // // // // //   const [type, setType] = useState("pdf-to-word");
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [downloadUrl, setDownloadUrl] = useState("");

// // // // // //   const backendURL = "http://72.60.78.58:4000"; // ← apna VPS IP yahan likh

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     if (!file) return alert("Please select a file!");

// // // // // //     setLoading(true);
// // // // // //     setDownloadUrl("");

// // // // // //     try {
// // // // // //       const formData = new FormData();

// // // // // //       if (type === "image-to-pdf") {
// // // // // //         formData.append("images", file);
// // // // // //       } else {
// // // // // //         formData.append("file", file);
// // // // // //       }

// // // // // //       const res = await axios.post(`${backendURL}/convert/${type}`, formData, {
// // // // // //         headers: { "Content-Type": "multipart/form-data" },
// // // // // //       });

// // // // // //       if (res.data.success) {
// // // // // //         setDownloadUrl(`${backendURL}/${res.data.download}`);
// // // // // //       } else {
// // // // // //         alert("Conversion failed!");
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //       alert("Error: " + err.message);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
// // // // // //       <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
// // // // // //         <h1 className="text-2xl font-bold text-center mb-4">📄 File Converter</h1>

// // // // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // // // //           {/* File type selection */}
// // // // // //           <select
// // // // // //             value={type}
// // // // // //             onChange={(e) => setType(e.target.value)}
// // // // // //             className="border p-2 w-full rounded"
// // // // // //           >
// // // // // //             <option value="pdf-to-word">PDF → Word</option>
// // // // // //             <option value="word-to-pdf">Word → PDF</option>
// // // // // //             <option value="image-to-pdf">Image → PDF</option>
// // // // // //           </select>

// // // // // //           {/* File upload */}
// // // // // //           <input
// // // // // //             type="file"
// // // // // //             onChange={(e) => setFile(e.target.files[0])}
// // // // // //             accept={
// // // // // //               type === "image-to-pdf"
// // // // // //                 ? "image/*"
// // // // // //                 : type === "pdf-to-word"
// // // // // //                 ? "application/pdf"
// // // // // //                 : ".doc,.docx"
// // // // // //             }
// // // // // //             className="border p-2 w-full rounded"
// // // // // //           />

// // // // // //           {/* Submit button */}
// // // // // //           <button
// // // // // //             type="submit"
// // // // // //             disabled={loading}
// // // // // //             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// // // // // //           >
// // // // // //             {loading ? "Converting..." : "Convert Now"}
// // // // // //           </button>
// // // // // //         </form>

// // // // // //         {/* Download link */}
// // // // // //         {downloadUrl && (
// // // // // //           <div className="mt-4 text-center">
// // // // // //             <p className="text-green-600 font-semibold">✅ Conversion Complete!</p>
// // // // // //             <a
// // // // // //               href={downloadUrl}
// // // // // //               target="_blank"
// // // // // //               rel="noopener noreferrer"
// // // // // //               className="text-blue-500 underline"
// // // // // //             >
// // // // // //               Download File
// // // // // //             </a>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
