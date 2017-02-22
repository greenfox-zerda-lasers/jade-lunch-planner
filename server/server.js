const path = require('path');
const express = require('express');
const pg = require('pg-promise')();
const bodyParser = require('body-parser');

// const apis = require('../src/services/apis.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

const port = process.env.PORT || 3000;
const localDb = 'postgres://jade@127.0.0.1:5432/lunch_planner';

const db = pg(process.env.DATABASE_URL || localDb);


app.get('/api/plans', (req, res) => {
  const query =
  `SELECT * FROM plans
  ORDER BY plan_id DESC`;
  db.any(query)
  .then(dbResponse => {
    res.json(dbResponse);
  }).catch(error => {
    res.status(500).json({error: error.message});
  });
});


app.post('/api/plans', (req, res) => {
  const query = {
    text: `INSERT INTO plans (place, time, timezone_offset)
    VALUES ($1, $2, $3)
    RETURNING *`,
    values: [req.body.place, req.body.time, req.body.timezone_offset]
  };
  db.one(query)
    .then(dbResponse => {
      res.json(dbResponse);
    }).catch(error => {
      res.status(500).json({ error: error.message });
    });
});


app.put('/api/plans/:plan_id', (req, res) => {
  const query =
    `UPDATE plans
    SET place = '${req.body.place}',
    time = '${req.body.time}',
    timezone_offset = '${req.body.timezone_offset}'
    WHERE plan_id = ${req.params.plan_id}
    RETURNING *`;
  db.one(query)
    .then(dbResponse => {
      res.json(dbResponse);
    }).catch(error => {
      res.status(500).json({ error: error.message });
    });
});


app.delete('/api/plans/:plan_id', (req, res) => {
  const query =
    `DELETE FROM plans
    WHERE plan_id = ${req.params.plan_id}`;
  db.one(query)
    .then(() => {
      res.json({ status: 200 });
    }).catch(error => {
      res.status(500).json({ error: error.message });
    });
});


// googlesearch
// app.get(`/api/google/:place)`, (req, res) => {
//   const API_KEY = apis.GOOGLE_PLACES_API_KEY;
//   const query = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=47.507462,19.0640058&radius=800&type=restaurant&keyword=${req.params.place}&key=${API_KEY}`;
//   any(query)
//     .then(responsedPlaces => {
//       console.log(responsedPlaces);
//       res.json(responsedPlaces);
//     }).catch(error => {
//       res.status(500).json({ error: error.message });
//     });
// });



app.listen(port, () => {
  if (port === 3000) {
    console.log(`A66 Lunch Planner is running on http://localhost:${port}`);
  }
});
