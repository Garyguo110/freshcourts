const express = require('express');
const app = express();
const path = require('path');
const dateFormat = require('dateformat');
const spoteryEngine = require('./scraperService/spoteryEngine.js')
const databaseEngine = require('../database/databaseEngine.js')
const databaseFunctions = require('../database/databaseFunctions.js')
const UserData = require('../database/UserData.js')
const CourtData = require('../database/CourtData.js')
const SessionData = require('../database/SessionData.js')

let user_1 = UserData.init('james', 'bond', 'jamesbond007', 'iamaspy', 'jamesbond@spy.com', 'London');
let court_1 = CourtData.init(123, 'wimbledon', 'LONDON, UK', [[9,5], [9,5], [9,5], [9,5]]);
let session_1 = SessionData.init(court_1, '12/12/2020', '3:00PM', 'available');

// Serve static files from the React app. 
app.use(express.static(path.join(__dirname, '..', 'client/build')));

app.get('/api', async (req, res) => {
    let date = dateFormat(new Date(), "mm/dd/yyyy");
    // TODO: Upsert sessions to the database
    res.send(await spoteryEngine.getSessionsForDate(date));
});

app.get('/db', async (req, res) => {
    databaseEngine.testDatabase(res);
});

app.get('/test_database', async (req, res) => {
    databaseFunctions.addUser(user_1);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`listening to port ${port} now...`);
});