
const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      email,
      department,
      jobTitle,
      message,
    } = req.body || {};

    // 1. Check that all fields are strings and not empty
    const fields = [
      firstName,
      lastName,
      phone,
      email,
      department,
      jobTitle,
      message,
    ];

    if (
      !fields.every(
        (field) =>
          typeof field === "string" && field.trim().length > 0
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "All career application fields are required and must be valid text.",
      });
    }

    // 2. Trim extra spaces
    const cleanFirstName = firstName.trim();
    const cleanLastName = lastName.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email.trim();
    const cleanDepartment = department.trim();
    const cleanJobTitle = jobTitle.trim();
    const cleanMessage = message.trim();

    // 3. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // 4. Validate phone number
    // Allows digits, optional leading +, spaces, hyphens and parentheses.
    // Requires 7–15 digits in total.
    const phoneRegex = /^\+?[0-9\s()-]+$/;
    const digitCount = cleanPhone.replace(/\D/g, "").length;

    if (!phoneRegex.test(cleanPhone) || digitCount < 7 || digitCount > 15) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid phone number.",
      });
    }

    // 5. Limit input lengths
    if (
      cleanFirstName.length > 100 ||
      cleanLastName.length > 100 ||
      cleanPhone.length > 25 ||
      cleanEmail.length > 254 ||
      cleanDepartment.length > 100 ||
      cleanJobTitle.length > 150 ||
      cleanMessage.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: "One or more fields exceed the allowed length.",
      });
    }

    // 6. Save validated data using a parameterized query
    const result = await pool.query(
      `INSERT INTO career_applications
       (
         first_name,
         last_name,
         contact_number,
         email_address,
         department,
         job_applied_for,
         message
       )
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING
         id,
         first_name,
         last_name,
         contact_number,
         email_address,
         department,
         job_applied_for,
         message,
         created_at`,
      [
        cleanFirstName,
        cleanLastName,
        cleanPhone,
        cleanEmail,
        cleanDepartment,
        cleanJobTitle,
        cleanMessage,
      ]
    );

    return res.status(201).json({
      success: true,
      message: "Career application submitted successfully.",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Career application error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit career application.",
    });
  }
});

module.exports = router;
