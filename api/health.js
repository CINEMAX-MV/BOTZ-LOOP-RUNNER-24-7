import { restartSession } from "../../utils/session";

export default function handler(req, res) {
  restartSession(); // Self-ping keeps session “alive”
  res.status(200).json({ health: "Server pinged 🔥" });
}
