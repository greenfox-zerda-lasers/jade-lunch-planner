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


app.put('/api/plans/:plan_id', (req, res) => {
  const query =
    `UPDATE plans
    SET place = '${req.body.value}',
    time = '${req.body.time}'
    WHERE plan_id = ${req.params.plan_id}
    RETURNING plan_id`;
  db.one(query)
    .then((dbResponse) => {
      res.json({ status: 'ok', id: dbResponse.plan_id });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
      console.log(err.message);
    });
});


app.listen(port, () => {
  if (port === 3000) {
    console.log(`A66 Lunch Planner is running on http://localhost:${port}`);
  }
});
