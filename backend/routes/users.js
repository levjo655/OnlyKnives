import express from "express";
import bcrypt from "bcrypt";
import pool from "../db.js";

const router = express.Router();

// health
router.get("/health", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json({ status: "db ok", time: result.rows[0].now });
});

// signup
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields are required" });

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await pool.query(
      `INSERT INTO users (name, email, password)
       VALUES ($1, $2, $3)
       RETURNING id, name, email`,
      [name, email, hashedPassword],
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === "23505")
      return res.status(409).json({ error: "Email already exists" });

    res.status(500).json({ error: "Server error" });
  }
});

// login
router.post("/login", async (req, res) => {
  const email = req.body.email?.trim().toLowerCase();
  const password = req.body.password;

  if (!email || !password)
    return res.status(400).json({ error: "Email and password required" });

  const userRes = await pool.query(
    "SELECT id, name, email, password FROM users WHERE email = $1",
    [email],
  );

  if (userRes.rows.length === 0)
    return res.status(401).json({ error: "Invalid credentials" });

  const user = userRes.rows[0];
  const match = await bcrypt.compare(password, user.password);

  if (!match) return res.status(401).json({ error: "Invalid credentials" });

  res.json({ id: user.id, name: user.name, email: user.email });
});

export default router;
