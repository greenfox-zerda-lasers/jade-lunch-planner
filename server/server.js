const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(port, () => {
  if (port === 8080) {
    console.log(`A66 Lunch Planner is running on http://localhost: ${port}`);
  } else {
    console.log(`A66 Lunch Planner is running on PORT: ${port}`);
  }
});
