const path = require('path');
const express = require('express');
const pg = require('pg');

const app = express();
// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/';
// const client = new pg.Client(connectionString);

const config = {
  user: 'ignoc', //env var: PGUSER
  database: 'dvdrental', //env var: PGDATABASE
  password: 'admin', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
};

const pool = new pg.Pool(config);

const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/db', (request, response) => {
  pool.connect((err, client, done) => {
    client.query('SELECT * FROM test', (error, result) => {
      done();
      if (error) {
        console.error(error);
        response.send(`Err: ${error}`);
      }
      response.send(result);
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
