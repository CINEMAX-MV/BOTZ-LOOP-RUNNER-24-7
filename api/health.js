
import { restartSession } from "../../utils/session";

export default function handler(req, res) {
  // Self-ping keeps the bot “alive”
  restartSession();
  res.status(200).json({ health: "Server pinged 🔥" });
}
