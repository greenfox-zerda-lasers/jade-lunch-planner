const path = require('path');
const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');

const app = express();
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/';
const pool = new pg.Pool(config);
const port = process.env.PORT || 8080;

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(express.static(path.resolve(__dirname, '../dist')));


const config = {
  user: process.env.PGUSER, // env var: PGUSER
  database: process.env.DATABASE_URL, // env var: PGDATABASE
  password: process.env.PGPASSWORD, // env var: PGPASSWORD
  host: connectionString, // Server hosting the postgres database
};


app.get('/db', (request, response) => {
  pool.connect((err, client) => {
    client.query('SELECT * FROM test', (error, result) => {
      console.log(error);
      console.log(result);
      if (error) {
        console.error(error);
        response.send(`Err: ${error}`);
      }
      response.send(result);
    });
  });
});

app.post('/add', (req, res) => {

  pool.connect((err, client) => {
    if (err) {
      return res.status(500).json({ succes: false, data: err });
    }
    // data insertiom
    client.query('INSERT INTO test_table(text, id) VALUES($1)', [req.body.text, 122], (error, rows) => {
      console.log(rows);
      if (error) {
        throw error;
      }
      response.send(rows);
    });
  });
});

app.listen(port, () => {
  if (port === 8080) {
    console.log(`A66 Lunch Planner is running on http://localhost: ${port}`);
  } else {
    console.log(`A66 Lunch Planner is running on PORT: ${port}`);
  }
});

console.log(process.env.DATABASE_URL);
