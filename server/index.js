const express = require('express');
const path = require('path');
const dateFormat = require('dateformat');
const WebSocket = require('ws');
const http = require('http');

const spoteryEngine = require('./scraperService/spoteryEngine.js');
const databaseEngine = require('../database/databaseEngine.js');
const databaseFunctions = require('../database/databaseFunctions.js');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
// Serve static files from the React app.
app.use(express.static(path.join(__dirname, '..', 'client/build')));

wss.on('connection', (ws) => {
  ws.on('message', async function incoming(message) {
    console.log('received: %s', message);
    const data = JSON.parse(message);
    let response = {};
    switch (data.type) {
      case 'refresh':
        response = await refreshAPI();
        break;
    }
    console.log('responding with: %s', JSON.stringify(response));
    ws.send(JSON.stringify(response));
  });
});

async function refreshAPI() {
  let response = { courts: [] };
  let courts = await databaseFunctions.listAllCourts();
  courts.forEach(function (court) {
    response['courts'].push(court.toDict());
  });
  return response;
}

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
server.listen(port, () => console.log(`Listening on port: ${port}`));
