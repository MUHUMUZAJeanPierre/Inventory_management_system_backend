const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const inventoryRoutes = require("./routes/inventoryRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/inventory", inventoryRoutes);

// Database Connection
mongoose
  .connect("mongodb+srv://jmuhumuza:x7O22tjYyDkIosWI@cluster0.lj9ha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ Database Connection Error:", err));

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
