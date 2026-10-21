
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./db");
const contactRoutes = require("./routes/contact");
const careerRoutes = require("./routes/careers");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "AVODAH & KHEN Backend is running",
  });
});

app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      success: true,
      message: "Neon PostgreSQL connected successfully",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error("Database connection error:", error);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

app.use("/api/contact", contactRoutes);
app.use("/api/careers", careerRoutes);

module.exports = app;
