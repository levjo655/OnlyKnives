import 'dotenv/config';  // loads .env
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: { rejectUnauthorized: false }
});

// Test connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Fel vid anslutning:', err.stack);
  }
  console.log('Ansluten till PostgreSQL RDS!');
  release();
});

// Example: Async query
async function testaQuery() {
  const res = await pool.query('SELECT NOW()');
  console.log('Aktuell tid från DB:', res.rows[0]);
}

testaQuery();

export default pool;