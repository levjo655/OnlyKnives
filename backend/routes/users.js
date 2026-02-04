// routes/users.js
import express from "express";
import bcrypt from "bcrypt";
import pool from "../db.js";

const router = express.Router();

router.get("/health", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "db ok", time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "db connection failed" });
  }
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  console.log("Received body:", req.body); // ← keep this for debugging

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

    // Success → return the newly created user (without password!)
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === "23505") {
      // unique violation (email exists)
      return res.status(409).json({ error: "Email already exists" });
    }

    console.error("Database error:", err.message, err.stack);
    res.status(500).json({ error: "Server error" });
  }
  // POST /users/login
  router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Email and password are required" });

    try {
      const userRes = await pool.query(
        "SELECT id, name, email, password FROM users WHERE email = $1",
        [email],
      );

      if (userRes.rows.length === 0)
        return res.status(401).json({ error: "Invalid credentials" });

      const user = userRes.rows[0];

      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ error: "Invalid credentials" });

      // Success → return user info (without password)
      res.json({ id: user.id, name: user.name, email: user.email });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ error: "Server error" });
    }
  });
});

export default router;
