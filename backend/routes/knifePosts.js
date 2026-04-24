import express from "express";
import db from "../db.js";
import pool from "../db.js";

const router = express.Router();
// GET
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        knife_posts.id,
        knife_posts.title,
        knife_posts.description,
        knife_posts.image_url,
        knife_posts.user_id,

        users.name AS smith_name,
        users.avatar_url AS smith_avatar
      FROM knife_posts
      JOIN users ON knife_posts.user_id = users.id
      ORDER BY knife_posts.id DESC
    `);

    res.json(result.rows);
  } catch (err) {
    console.error("🔥 JOIN ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});
// Post
router.post("/", async (req, res) => {
  const { title, description, image_url, user_id } = req.body;

  if (!title || !user_id) {
    return res.status(400).json({ error: "Title and user_id required" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO knife_posts (title, description, image_url, user_id)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [title, description, image_url, user_id],
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
