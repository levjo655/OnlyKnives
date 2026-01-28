import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    require: false,
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 5000,
});

async function testConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("✅ Connected! DB time:", res.rows[0].now);
    process.exit(0);
  } catch (err) {
    console.error("Connection failed:", err.message);
    console.error(err);
    process.exit(1);
  }
}

testConnection();

export default pool;
