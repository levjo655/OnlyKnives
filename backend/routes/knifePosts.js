import express from "express";
import db from "../db.js";

const router = express.Router();
// GET
router.get("/", async (req, res) => {
  try {
    const result = await db.query(`
      SELECT knife_posts.*, users.name
      FROM knife_posts
      JOIN users ON users.id = knife_posts.user_id
      ORDER BY knife_posts.created_at DESC
    `);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});
// Post
router.post("/", async (req, res) => {
  try {
    const { title, description, image_url, user_id } = req.body;

    const result = await db.query(
      `INSERT INTO knife_posts (title, description, image_url, user_id)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [title, description, image_url, user_id],
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create post" });
  }
});

export default router;
