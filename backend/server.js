import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors({
  origin: ["http://localhost:5173"], //, "https://your-frontend-domain.vercel.app"
  credentials: true
}));
app.use(express.json());

// Register API routes
app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/upload", uploadRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));

// Start Server
app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
