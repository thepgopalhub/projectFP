import express from "express";
import Client from "../models/Client.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: "Client Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
