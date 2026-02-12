
import { restartSession } from "../../utils/session";

export default function handler(req, res) {
  restartSession();
  res.status(200).json({ message: "Bot restarted 🔄" });
}
