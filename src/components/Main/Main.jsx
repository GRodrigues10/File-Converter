import React, { useState, useRef } from "react";
import { StylesMain } from "./Styles";
import img from "../../assets/files-img.png";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import JSZip from "jszip";
import { FaRedo } from "react-icons/fa";

function Main() {
  const [file, setFile] = useState(null);
  const [buttonText, setButtonText] = useState("Choose");
  const [format, setFormat] = useState("DOC");

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (!file) {
      fileInputRef.current.click();
    } else {
      handleConvert(file);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    setFile(selectedFile);
    setButtonText("Convert");
  };

  const handleReset = () => {
    setFile(null);
    setButtonText("Choose");
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const handleConvert = (currentFile) => {
    const activeFile = currentFile || file;
    if (!activeFile) return alert("Selecione um arquivo primeiro!");

    // Conversão de imagens para PDF
    if (activeFile.type.startsWith("image/") && format === "PDF") {
      const reader = new FileReader();
      reader.onload = () => {
        const imgData = reader.result;
        const pdf = new jsPDF();
        pdf.addImage(imgData, "JPEG", 10, 10, 180, 160);
        pdf.save("converted.pdf");
      };
      reader.readAsDataURL(activeFile);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const content = reader.result;

      if (format === "DOC") {
        const doc = new Document({
          sections: [
            {
              properties: {},
              children: [new Paragraph({ children: [new TextRun(content)] })],
            },
          ],
        });
        Packer.toBlob(doc).then((blob) => saveAs(blob, "converted.docx"));
      } else if (format === "PDF") {
        const doc = new jsPDF();
        const lines = content.split("\n");
        lines.forEach((line, i) => doc.text(line, 10, 10 + i * 10));
        doc.save("converted.pdf");
      } else if (format === "TXT") {
        downloadFile(content, "converted.txt");
      } else if (format === "XLSX") {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(content.split("\n").map((line) => [line]));
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, "converted.xlsx");
      } else if (format === "ZIP") {
        const zip = new JSZip();
        zip.file(activeFile.name.replace(/\.[^/.]+$/, "") + ".txt", content);
        zip.generateAsync({ type: "blob" }).then((blob) => saveAs(blob, "converted.zip"));
      }
    };

    reader.readAsText(activeFile);
  };

  const downloadFile = (content, fileName) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <StylesMain>
      <h1>File Converter</h1>
      <p>Convert your files into some types</p>
      <main
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const droppedFile = e.dataTransfer.files[0];
          if (!droppedFile) return;
          setFile(droppedFile);
          setButtonText("Convert");
          handleConvert(droppedFile);
        }}
      >
        <img src={img} alt="" />
        <h3>Choose Files</h3>
        <p>Or drag and drop files here</p>

        <input
          ref={fileInputRef}
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        {/* botão principal */}
        <button
          onClick={handleButtonClick}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "#fff",
            cursor: "pointer",
            borderRadius: "5px",
            border: "none",
          }}
        >
          {buttonText}
        </button>

        {/* botão reset */}
        {file && (
          <button
            onClick={handleReset}
            style={{
              position:'relative',
              top:'5px',
              background: "transparent",
              color: "#0c0c0c",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "spin 2s linear infinite",
            }}
          >
            <FaRedo size={18} />
          </button>
        )}

        {/* select de formato */}
        <div style={{ marginTop: "15px", textAlign: "center" }}>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            style={{
              
            }}
          >
            <option value="DOC">DOC</option>
            <option value="PDF">PDF</option>
            <option value="TXT">TXT</option>
            <option value="XLSX">XLSX</option>
            <option value="ZIP">ZIP</option>
          </select>
        </div>
      </main>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </StylesMain>
  );
}

export default Main;
