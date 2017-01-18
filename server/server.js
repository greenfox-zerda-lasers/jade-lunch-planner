const path = require('path');
const express = require('express');
const app = express();
const pg = require('pg');

const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(port, () => {
  if (port === 8080) {
    console.log(`A66 Lunch Planner is running on http://localhost: ${port}`);
  } else {
    console.log(`A66 Lunch Planner is running on PORT: ${port}`);
  }
});

// console.log(pg);

console.log(process.env.HEROKU_POSTGRESQL_DBNAME_URL);

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function (err, client, done) {
    client.query('SELECT * FROM test_table', (err, result) => {
      done();
      if (err)
      { console.error(err); response.send("Error " + err); }
      else
      { response.render('pages/db', {results: result.rows} ); }
    });
  });
});

console.log(process.env.DATABASE_URL);
