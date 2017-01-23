const path = require('path');
const express = require('express');
const pg = require('pg-promise')();
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

const port = process.env.PORT || 3000;


const db = pg({
    host: process.env.DATABASE_URL || 'localhost',
    user: process.env.DB_USER || 'jade',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'lunch_planner',
});
;


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
  const query = {
    text: 'INSERT INTO lunch_plans(plan) VALUES($1) returning id',
    values: [req.body.value],
  };
  db.one(query)
    .then((plan) => {
      res.json({ status: 'ok', id: plan.id });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});


app.listen(port, () => {
  if (port === 3000) {
    console.log(`A66 Lunch Planner is running on http://localhost:${port}`);
  }
});
