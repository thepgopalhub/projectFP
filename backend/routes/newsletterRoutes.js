import express from "express";
import Newsletter from "../models/Newsletter.js";

const router = express.Router();

// SUBSCRIBE
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const exists = await Newsletter.findOne({ email });

    if (exists) {
      return res.status(400).json({ message: "Already subscribed!" });
    }

    const newSub = await Newsletter.create({ email });
    return res.status(201).json({
      message: "Subscribed successfully!",
      subscriber: newSub,
    });
  } catch (err) {
    console.error("Newsletter subscribe error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// READ all (admin)
router.get("/", async (_req, res) => {
  try {
    const subs = await Newsletter.find().sort({ createdAt: -1 });
    res.json(subs);
  } catch (err) {
    console.error("Newsletter fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
