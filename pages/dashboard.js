import { useState, useEffect } from "react";

export default function Dashboard() {
  const [status, setStatus] = useState("Unknown");
  const [fileName, setFileName] = useState("");
  const [files, setFiles] = useState([]);

  const deployBot = async () => {
    const res = await fetch("/api/deploy");
    const data = await res.json();
    alert(data.message);
    checkStatus();
  };

  const restartBot = async () => {
    const res = await fetch("/api/restart");
    const data = await res.json();
    alert(data.message);
    checkStatus();
  };

  const checkStatus = async () => {
    const res = await fetch("/api/status");
    const data = await res.json();
    setStatus(data.status);
  };

  const uploadFile = async () => {
    if (!fileName) return alert("Enter a file name!");
    const res = await fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileName }),
    });
    const data = await res.json();
    alert(data.message);
    setFiles(data.files);
    setFileName("");
  };

  const fetchFiles = async () => {
    const res = await fetch("/api/upload");
    const data = await res.json();
    setFiles(data.files);
  };

  useEffect(() => {
    checkStatus();
    fetchFiles();
    const interval = setInterval(checkStatus, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Bot Dashboard</h1>
      <p>Status: {status}</p>

      <button onClick={deployBot} style={{ margin: "10px" }}>Deploy Bot 🚀</button>
      <button onClick={restartBot} style={{ margin: "10px" }}>Restart Bot 🔄</button>
      <button onClick={checkStatus} style={{ margin: "10px" }}>Check Status 🟢</button>

      <hr style={{ margin: "30px 0" }} />

      <h2>Upload Bot File (Simulation)</h2>
      <input 
        type="text" 
        value={fileName} 
        onChange={(e) => setFileName(e.target.value)} 
        placeholder="Enter file name"
      />
      <button onClick={uploadFile} style={{ marginLeft: "10px" }}>Upload</button>

      <h3 style={{ marginTop: "20px" }}>Uploaded Files:</h3>
      <ul>
        {files.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
    </div>
  );
}
