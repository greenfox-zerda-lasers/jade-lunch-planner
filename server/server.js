const path = require('path');
const express = require('express');
const pg = require('pg-promise')();
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

const port = process.env.PORT || 3000;

// const localDb = 'postgres://jade:root@127.0.0.1:5432/dadjlnu7ht6s6h';
const localDb = 'postgres://jade@127.0.0.1:5432/lunch_planner';

const db = pg(process.env.DATABASE_URL || localDb);


app.get('/db', (req, res) => {
  db.any('SELECT * FROM plans')
    .then((plans) => {
      res.send(plans);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});


app.post('/add', (req, res) => {
  console.log(req.body);
  const query = {
    text: 'INSERT INTO plans (place, time) VALUES ($1, $2) returning id',
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
