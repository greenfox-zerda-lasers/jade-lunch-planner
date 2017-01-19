const path = require('path');
const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');

const app = express();
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/';
const client = new pg.Client(connectionString);

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../dist')));


const config = {
  user: process.env.PGUSER, // env var: PGUSER
  database: process.env.DATABASE_URL, // env var: PGDATABASE
  password: process.env.PGPASSWORD, // env var: PGPASSWORD
  host: connectionString, // Server hosting the postgres database
};

const port = process.env.PORT || 8080;
const pool = new pg.Pool(config);
pool.connect();


app.get('/db', (req, res) => {
  console.log(req.body);
  client.query('SELECT * FROM test', (error, result) => {
    if (error) {
      res.send(`Err: ${error}`);
    }
    res.send(result);
  });
});


app.post('/add', (req, res) => {
  client.query(`INSERT INTO test_table(text) VALUES(${req.body.text})`, (error, rows) => {
    if (error) {
      throw error;
    }
    res.send(rows);
  });
});


app.listen(port, () => {
  if (port === 8080) {
    console.log(`A66 Lunch Planner is running on http://localhost:${port}`);
  }
});
