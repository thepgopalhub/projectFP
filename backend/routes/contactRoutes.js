import express from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = express.Router();

// CREATE message (from landing page)
router.post("/", async (req, res) => {
  try {
    const msg = await ContactMessage.create(req.body);
    res.json(msg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all (admin)
router.get("/", async (req, res) => {
  try {
    const msgs = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(msgs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
