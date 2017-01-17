const express = require('express');
const app = express();

const port = process.env.PORT || 8080;


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`A66 Lunch Planner is running on http://localhost: ${port}`);
});
