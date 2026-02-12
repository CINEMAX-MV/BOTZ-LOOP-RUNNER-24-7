import { useState, useEffect } from "react";

export default function Dashboard() {
  const [status, setStatus] = useState("Unknown");

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

  useEffect(() => {
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
    </div>
  );
}
