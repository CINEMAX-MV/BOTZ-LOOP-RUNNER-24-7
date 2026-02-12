import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      background: "#0b0b0b",
      color: "#fff",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>🔥 PEX Hosting Platform</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        Deploy Your WhatsApp Bot Instantly & Run for 45 min
      </p>

      <Link href="/dashboard">
        <button style={{
          padding: "15px 30px",
          fontSize: "1.2rem",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#00ff99",
          color: "#000",
          cursor: "pointer"
        }}>
          Go to Dashboard 🚀
        </button>
      </Link>

      <p style={{ marginTop: "50px", fontSize: "0.9rem", color: "#aaa" }}>
        * Auto restart every 45 min simulated with /api/health
      </p>
    </div>
  );
}
