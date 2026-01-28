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
    rejectUnauthorized: false, // allows RDS self-signed certificate
  },
  connectionTimeoutMillis: 10000,
  idleTimeoutMillis: 30000,
});

async function testConnection() {
  let client;
  try {
    client = await pool.connect();
    const res = await client.query("SELECT NOW() as now");
    console.log("✅ Connected! Database time:", res.rows[0].now);
  } catch (err) {
    console.error("Connection failed:");
    console.error("Message:", err.message);
    if (err.code) console.error("Code:", err.code);
    console.error("Stack:", err.stack);
  } finally {
    if (client) client.release();
  }
}

testConnection();

export default pool;
