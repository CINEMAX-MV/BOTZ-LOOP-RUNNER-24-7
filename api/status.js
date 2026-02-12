import { isActive } from "../../utils/session";

export default function handler(req, res) {
  const status = isActive() ? "Running 🟢" : "Inactive 🔴";
  res.status(200).json({ status });
}
