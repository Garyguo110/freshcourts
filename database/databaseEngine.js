// Connect to the Database
const { Pool } = require('pg');
const dbUrl = process.env.DATABASE_URL || "postgres://localhost:5432/postgres";

const pool = new Pool({
    connectionString: dbUrl,
});

async function testDatabase(res) {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM test_table');
        const results = { 'results': (result) ? result.rows : null};
        res.send(results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
}

exports.testDatabase = testDatabase;