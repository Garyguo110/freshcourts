const express = require('express');
const path = require('path');
const dateFormat = require('dateformat');
const WebSocket = require('ws');
const http = require('http');
const cors = require('cors');

const spoteryEngine = require('./scraperService/spoteryEngine.js');
const databaseEngine = require('../database/databaseEngine.js');
const databaseFunctions = require('../database/databaseFunctions.js');
const Court = require('../database/CourtData.js');
const sessionData = require('../database/SessionData.js');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
// Serve static files from the React app.
app.use(express.static(path.join(__dirname, '..', 'client/build')));
app.use(cors());

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

app.get('/test', async (req, res) => {
  const court_1 = Court.init('4438853', 'Alice Marble Tennis Court #1', 'Greenwich St & Hyde St, San Francisco, CA');
  const court_2 = Court.init('4433542', 'Alice Marble Tennis Court #2', 'Greenwich St & Hyde St, San Francisco, CA');
  const court_3 = Court.init('3333206', 'Alice Marble Tennis Court #3', 'Greenwich St & Hyde St, San Francisco, CA');
  const court_4 = Court.init('3333250', 'Alice Marble Tennis Court #4', 'Greenwich St & Hyde St, San Francisco, CA');
  const court_5 = Court.init('3333199', 'Balboa Park Tennis Court #1', 'Ocean Ave & San Jose Ave, San Francisco, CA');
  const court_6 = Court.init('3333256', 'Balboa Park Tennis Court #2', 'Ocean Ave & San Jose Ave, San Francisco, CA');
  const court_7 = Court.init('4456695', 'Balboa Park Tennis Court #3', 'Ocean Ave & San Jose Ave, San Francisco, CA');
  const court_8 = Court.init('4456807', 'Balboa Park Tennis Court #4', 'Ocean Ave & San Jose Ave, San Francisco, CA');
  const session_1 = sessionData.init(court_1, '11/28/2020', '9:00 AM', 'available');
  const session_2 = sessionData.init(court_1, '11/28/2020', '11:00 AM', 'available');
  const session_3 = sessionData.init(court_1, '11/28/2020', '1:00 PM', 'available');
  const session_4 = sessionData.init(court_1, '11/28/2020', '3:00 PM', 'available');
  const session_5 = sessionData.init(court_1, '11/28/2020', '5:00 PM', 'available');
  const session_6 = sessionData.init(court_1, '11/29/2020', '9:00 AM', 'available');
  const session_7 = sessionData.init(court_1, '11/29/2020', '11:00 AM', 'available');
  const session_8 = sessionData.init(court_1, '11/29/2020', '2:00 PM', 'available');
  const session_9 = sessionData.init(court_1, '11/29/2020', '7:00 PM', 'available');
  const session_10 = sessionData.init(court_2, '11/28/2020', '9:00 AM', 'available');
  const session_11 = sessionData.init(court_2, '11/28/2020', '10:00 AM', 'available');
  const session_12 = sessionData.init(court_2, '11/28/2020', '12:00 PM', 'available');
  const session_13 = sessionData.init(court_2, '11/28/2020', '3:00 PM', 'available');
  const session_14 = sessionData.init(court_2, '11/29/2020', '3:00 PM', 'available');
  const session_15 = sessionData.init(court_2, '11/29/2020', '5:00 PM', 'available');
  const session_16 = sessionData.init(court_2, '11/29/2020', '7:00 PM', 'available');
  const session_17 = sessionData.init(court_2, '11/29/2020', '9:00 PM', 'available');
  const session_18 = sessionData.init(court_3, '11/28/2020', '9:00 AM', 'available');
  const session_19 = sessionData.init(court_3, '11/28/2020', '11:00 AM', 'available');
  const session_20 = sessionData.init(court_3, '11/28/2020', '2:00 PM', 'available');
  const session_21 = sessionData.init(court_3, '11/28/2020', '5:00 PM', 'available');
  const session_22 = sessionData.init(court_3, '11/29/2020', '11:00 AM', 'available');
  const session_23 = sessionData.init(court_3, '11/29/2020', '1:00 PM', 'available');
  const session_24 = sessionData.init(court_3, '11/29/2020', '3:00 PM', 'available');
  const session_25 = sessionData.init(court_3, '11/29/2020', '5:00 PM', 'available');
  // await databaseFunctions.createSession(session_1);
  // await databaseFunctions.createSession(session_2);
  // await databaseFunctions.createSession(session_3);
  // await databaseFunctions.createSession(session_4);
  // await databaseFunctions.createSession(session_5);
  // await databaseFunctions.createSession(session_6);
  // await databaseFunctions.createSession(session_7);
  // await databaseFunctions.createSession(session_8);
  // await databaseFunctions.createSession(session_9);
  // await databaseFunctions.createSession(session_10);
  // await databaseFunctions.createSession(session_11);
  // await databaseFunctions.createSession(session_12);
  // await databaseFunctions.createSession(session_13);
  // await databaseFunctions.createSession(session_14);
  // await databaseFunctions.createSession(session_15);
  // await databaseFunctions.createSession(session_16);
  // await databaseFunctions.createSession(session_17);
  // await databaseFunctions.createSession(session_18);
  // await databaseFunctions.createSession(session_19);
  // await databaseFunctions.createSession(session_20);
  // await databaseFunctions.createSession(session_21);
  // await databaseFunctions.createSession(session_22);
  // await databaseFunctions.createSession(session_23);
  // await databaseFunctions.createSession(session_24);
  // await databaseFunctions.createSession(session_25);
  const sessions = await databaseFunctions.listSessions();
  res.send(sessions);
});

app.get('/listSessions', async (req, res) => {
  const sessions = await databaseFunctions.listSessions();
  res.send(sessions);
});

app.get('/listHotCourts', async (req, res) => {
  res.send(databaseFunctions.getUserFavourite(req.user_id));
});

// CRUD

// app.post('/deleteHotCourts')

app.post('/createHotCourts', async (req, res) => {
  res.send(databaseFunctions.addUserFavourite(req.user_id));
});

//create sessions

app.get('/listCourts', async (req, res) => {
  const courts = await databaseFunctions.getAllCourts();
  res.send(courts);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/build/index.html'));
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Listening on port: ${port}`));
