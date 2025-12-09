import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "realtrust_uploads",
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), (req, res) => {
  console.log("FILE RECEIVED:", req.file);

  if (!req.file) {
    return res.status(400).json({ error: "File upload failed" });
  }

  res.json({ url: req.file.path });
});

export default router;
