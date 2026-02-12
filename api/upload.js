import { addFile, getFiles } from "../../utils/files";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { fileName } = req.body;
    if (!fileName) return res.status(400).json({ message: "No file name" });

    addFile(fileName);
    return res.status(200).json({ message: `File ${fileName} uploaded ✅`, files: getFiles() });
  }

  if (req.method === "GET") {
    return res.status(200).json({ files: getFiles() });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
