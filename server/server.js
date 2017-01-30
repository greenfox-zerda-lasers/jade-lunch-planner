const path = require('path');
const express = require('express');
const pg = require('pg-promise')();
const bodyParser = require('body-parser');

const validator = require('../src/app/time_validator');


const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

const port = process.env.PORT || 3000;

// const localDb = 'postgres://jade:root@127.0.0.1:5432/dadjlnu7ht6s6h';
const localDb = 'postgres://jade@127.0.0.1:5432/lunch_planner';

const db = pg(process.env.DATABASE_URL || localDb);


app.get('/api/plans/:plan_id', (req, res) => {
  const query =
  `SELECT time, place FROM plans
  WHERE plan_id = ${req.params.plan_id}`;
  db.any(query)
  .then((dbResponse) => {
    const time = validator.dateLocalizer(dbResponse[0].time);
    const planData = {
      place: dbResponse[0].place,
      time: {
        hour: time.hour,
        minute: time.minute,
      }
    }
    res.json(planData);
  })
  .catch((error) => {
    res.status(500).json({error: error.message})
  })
});

app.put('/api/plans/:plan_id', (req, res) => {
  const timestamp = validator.dateFormatter(req.body.time, req.body.timezoneOffset);
  const query =
    `UPDATE plans
    SET place = '${req.body.value}',
    time = '${timestamp}'
    WHERE plan_id = ${req.params.plan_id}
    RETURNING plan_id, time`;
  db.one(query)
    .then((dbResponse) => {
      res.json({ status: 'ok', id: dbResponse.plan_id });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});


app.listen(port, () => {
  if (port === 3000) {
    console.log(`A66 Lunch Planner is running on http://localhost:${port}`);
  }
});
