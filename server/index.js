const express = require('express');
const app = express();
const path = require('path');
const dateFormat = require('dateformat');
const spoteryEngine = require('./scraperService/spoteryEngine.js');
const databaseEngine = require('../database/databaseEngine.js');

// Serve static files from the React app.
app.use(express.static(path.join(__dirname, '..', 'client/build')));

app.get('/api', async (req, res) => {
  let date = dateFormat(new Date(), 'mm/dd/yyyy');
  // TODO: Upsert sessions to the database
  res.send(await spoteryEngine.getSessionsForDate(date));
});

app.get('/db', async (req, res) => {
  databaseEngine.testDatabase(res);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening to port ${port} now...`);
});
