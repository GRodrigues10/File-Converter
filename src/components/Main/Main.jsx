import React, { useState, useRef } from "react";
import { StylesMain } from "./Styles";
import img from "../../assets/files-img.png";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import JSZip from "jszip";
import { FaRedo } from "react-icons/fa";

const TEXT_FORMATS = ["DOC", "PDF", "TXT", "XLSX", "ZIP"];
const IMAGE_FORMATS = ["PDF"];

const isImage = (f) => f?.type?.startsWith("image/");
const isText = (f) =>
  f?.type?.startsWith("text/") || f?.type === "application/json";

function Main() {
  const [file, setFile] = useState(null);
  const [buttonText, setButtonText] = useState("Choose");
  const [format, setFormat] = useState("DOC");

  const fileInputRef = useRef(null);

  const getFormatsForFile = (f) => (isImage(f) ? IMAGE_FORMATS : TEXT_FORMATS);

  const handleButtonClick = () => {
    if (!file) {
      fileInputRef.current?.click();
    } else {
      handleConvert(file);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    const defaultFormat = isImage(selectedFile) ? "PDF" : "DOC";
    setFile(selectedFile);
    setFormat(defaultFormat);
    setButtonText("Convert");
  };

  const handleReset = () => {
    setFile(null);
    setFormat("DOC");
    setButtonText("Choose");
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const handleConvert = (currentFile, forcedFormat = null) => {
    const activeFile = currentFile || file;
    const selectedFormat = forcedFormat || format;

    if (!activeFile) return alert("Selecione um arquivo primeiro!");

    // Valida tipos suportados
    if (!isImage(activeFile) && !isText(activeFile)) {
      return alert("Apenas arquivos de texto (txt/csv/json) ou imagens são suportados.");
    }

    // IMAGEM -> PDF
    if (isImage(activeFile)) {
      if (selectedFormat !== "PDF") {
        return alert("Para imagens, o único formato de saída suportado é PDF.");
      }
      const reader = new FileReader();
      reader.onload = () => {
        const imgData = reader.result;
        const pdf = new jsPDF(); // A4 padrão (mm)
        const image = new Image();
        image.onload = () => {
          const pageW = pdf.internal.pageSize.getWidth();
          const pageH = pdf.internal.pageSize.getHeight();
          const ratio = Math.min(pageW / image.width, pageH / image.height);
          const w = image.width * ratio;
          const h = image.height * ratio;
          const x = (pageW - w) / 2;
          const y = (pageH - h) / 2;
          const imgType = activeFile.type.includes("png") ? "PNG" : "JPEG";
          pdf.addImage(imgData, imgType, x, y, w, h);
          pdf.save("converted.pdf");
        };
        image.src = imgData;
      };
      reader.readAsDataURL(activeFile);
      return;
    }

    // TEXTO -> (DOC, PDF, TXT, XLSX, ZIP)
    const reader = new FileReader();
    reader.onload = () => {
      const content = reader.result;

      if (selectedFormat === "DOC") {
        const doc = new Document({
          sections: [
            { properties: {}, children: [new Paragraph({ children: [new TextRun(content)] })] },
          ],
        });
        Packer.toBlob(doc).then((blob) => saveAs(blob, "converted.docx"));
      } else if (selectedFormat === "PDF") {
        const doc = new jsPDF();
        const lines = String(content).split("\n");
        lines.forEach((line, i) => doc.text(line, 10, 10 + i * 10));
        doc.save("converted.pdf");
      } else if (selectedFormat === "TXT") {
        downloadFile(content, "converted.txt");
      } else if (selectedFormat === "XLSX") {
        const wb = XLSX.utils.book_new();
        const rows = String(content).split("\n").map((line) => [line]);
        const ws = XLSX.utils.aoa_to_sheet(rows);
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, "converted.xlsx");
      } else if (selectedFormat === "ZIP") {
        const zip = new JSZip();
        zip.file("converted.txt", content);
        zip.generateAsync({ type: "blob" }).then((blob) => saveAs(blob, "converted.zip"));
      }
    };
    reader.readAsText(activeFile);
  };

  const downloadFile = (content, fileName) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  const availableFormats = getFormatsForFile(file);

  return (
    <StylesMain>
      <h1>File Converter</h1>
      <p>Convert your files into some types</p>

      <main
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const droppedFile = e.dataTransfer.files?.[0];
          if (!droppedFile) return;
          const defaultFormat = isImage(droppedFile) ? "PDF" : "DOC";
          setFile(droppedFile);
          setFormat(defaultFormat);
          setButtonText("Convert");
          // converter já com o formato correto no drop
          handleConvert(droppedFile, defaultFormat);
        }}
      >
        <img src={img} alt="" />
        <h3>Choose Files</h3>
        <p>Or drag and drop files here</p>

        <input
          ref={fileInputRef}
          id="fileInput"
          type="file"
          accept="text/*,image/*,application/json"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        {/* botão principal */}
        <button onClick={handleButtonClick}>{buttonText}</button>

        {/* botão reset */}
        {file && (
          <button
            onClick={handleReset}
            style={{
              position: "relative",
              top: "5px",
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
            title="Reset"
          >
            <FaRedo size={18} />
          </button>
        )}

        {/* select de formato (dinâmico por tipo do arquivo) */}
        <div style={{ marginTop: "15px", textAlign: "center" }}>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            disabled={!file}
          >
            {availableFormats.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
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
