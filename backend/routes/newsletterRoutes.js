import express from "express";
import Newsletter from "../models/Newsletter.js";

const router = express.Router();

// SUBSCRIBE
router.post("/", async (req, res) => {
  try {
    const email = req.body.email;
    const exists = await Newsletter.findOne({ email });

    if (exists) {
      return res.status(400).json({ message: "Already subscribed!" });
    }

    const newSub = await Newsletter.create({ email });
    res.json(newSub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all (admin)
router.get("/", async (req, res) => {
  try {
    const subs = await Newsletter.find().sort({ createdAt: -1 });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
