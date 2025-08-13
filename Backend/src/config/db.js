// src/config/db.js
const { Pool } = require('pg');
const dotenv = require('dotenv');
const logger = require('./logger'); // use your winston logger instead of console.log

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

/**
 * Connect to PostgreSQL and verify the connection
 */
const connectDB = async () => {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT NOW()');
    logger.info(`✅ Connected to PostgreSQL at ${res.rows[0].now}`);
    client.release();
  } catch (err) {
    logger.error('❌ Error connecting to PostgreSQL:', err.stack);
    process.exit(1); // stop app if DB connection fails
  }
};

module.exports = {
  connectDB,
  pool, // export pool so models can query directly
};
