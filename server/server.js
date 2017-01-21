const path = require('path');
const express = require('express');
const pg = require('pg-promise')();
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

const port = process.env.PORT || 8080;


const db = pg({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'jade',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'lunch_planner',
});


app.get('/db', (req, res) => {
  db.any('SELECT * FROM lunch_plans')
    .then((plans) => {
      res.send(plans);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});


app.post('/add', (req, res) => {
  console.log(req.body.text);
  db.any(`INSERT INTO lunch_plans(plan) VALUES(${req.body.text})`, (error, rows) => {
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
