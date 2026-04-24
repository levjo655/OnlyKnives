// routes/users.js
import express from "express";
import bcrypt from "bcrypt";
import pool from "../db.js";
import { auth, requiredScopes } from "express-oauth2-jwt-bearer";

const router = express.Router();

// ------------------------
// Auth0 JWT Middleware
// ------------------------
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE, // your API identifier
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
});
console.log(process.env);

// ------------------------
// PUBLIC ROUTES
// ------------------------
// Get smiths
router.get("/smiths", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, avatar_url, bio FROM users WHERE role = 'smith'",
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
// Health check (public, optional)
router.get("/public-health", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "db ok", time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "db connection failed" });
  }
});

// Register a new user
router.post("/", async (req, res) => {
  const { name, email, password, role, avatar_url, bio } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (name, email, password, role, avatar_url, bio)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, name, email, role, avatar_url, bio`,
      [
        name,
        email,
        hashedPassword,
        role || "member",
        avatar_url || null,
        bio || null,
      ],
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Login user
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

// ------------------------
// PROTECTED ROUTES
// ------------------------

// Example: database health check (protected)
router.get("/health", checkJwt, async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "db ok", time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "db connection failed" });
  }
});

// Example: get all users (protected, with optional scope)
router.get("/", checkJwt, requiredScopes("read:users"), async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, email, created_at FROM users",
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get smith and knives

router.get("/:id/profile", async (req, res) => {
  const { id } = req.params;

  try {
    const userResult = await pool.query(
      "SELECT id, name, avatar_url, bio FROM users WHERE id = $1 AND role = 'smith'",
      [id],
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: "Smith not found" });
    }

    const knivesResult = await pool.query(
      "SELECT * FROM knife_posts WHERE user_id = $1 ORDER BY id DESC",
      [id],
    );

    res.json({
      smith: userResult.rows[0],
      knives: knivesResult.rows,
    });
  } catch (err) {
    console.error("PROFILE ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
