import express from "express";
import bcrypt from "bcrypt";
import pool from "../db.js";

const router = express.Router();

router.post(`/`, async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received body:", req.body);
  res.status(201).json({ message: "Router works!", body: req.body });

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (name, email, password)
       VALUES ($1, $2, $3)
       RETURNING id, name, email, created_at`,
      [name, email, hashedPassword],
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === "23505") {
      return res.status(409).json({ error: "Email already exists" });
    }
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
