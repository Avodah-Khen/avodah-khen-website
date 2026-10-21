
const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, city } = req.body || {};

    // Validate field types and reject empty or whitespace-only values.
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof city !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !city.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, work email and city are required and must be valid text.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanCity = city.trim();

    // Basic email format validation.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid work email address.",
      });
    }

    const result = await pool.query(
      `INSERT INTO contacts (name, work_email, city)
       VALUES ($1, $2, $3)
       RETURNING id, name, work_email, city, created_at`,
      [cleanName, cleanEmail, cleanCity]
    );

    return res.status(201).json({
      success: true,
      message: "Contact request submitted successfully.",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit contact request.",
    });
  }
});

module.exports = router;
