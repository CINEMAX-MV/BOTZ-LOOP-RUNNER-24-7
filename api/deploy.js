import { startSession } from "../../utils/session";

export default function handler(req, res) {
  startSession();
  res.status(200).json({ message: "Bot deployed ✅ Running for 45 min..." });
}
