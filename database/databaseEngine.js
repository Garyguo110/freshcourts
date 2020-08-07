// Connect to the Database
const { Pool } = require('pg');
const dbUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/postgres';

const pool = new Pool({
  connectionString: dbUrl,
});

async function databaseConnection(res) {
  try {
    const client = await pool.connect();
    return client;
  } catch (err) {
    console.error(err);
    res.send('Error ' + err);
  }
}

exports.databaseConnection = databaseConnection;
