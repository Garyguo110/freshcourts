const dbEngine = require('./databaseEngine.js');
const CourtData = require('./CourtData.js')
const SessionData = require('./SessionData.js')

// async function addUser(user) {
//   const con = await dbEngine.databaseConnection();
//   let query = `INSERT INTO user_accounts(first_name,last_name,username,password,email,user_location) VALUES(?,?,?,?,?,?)`;
//   let new_user = [user.first_name, user.last_name, user.username, user.password, user.email, user.location];
//   await con.query(query, [new_user], (err,res,fields) => {
//     if(err) throw err;
//     console.log('User added successfully!');
//     console.log(res);
//     return res;
//   });
// }

async function addUser(user) {
    const con = await dbEngine.databaseConnection();
    await con.query(`INSERT INTO user_accounts (first_name, last_name, username, password, email, user_location) VALUES (${user.first_name}, ${user.last_name}, ${user.username}, ${user.password}, ${user.email}, ${user.location})`, function(err,res) {
      if(err) throw err;
      console.log('User added successfully!');
      console.log(res)
      return res;
    });
}

async function getUser(user_id) {
    const con = await dbEngine.databaseConnection();
    await con.query(`SELECT * FROM user_accounts WHERE user_id=${user_id}`, (err,res) => {
        if(err) throw err;
        console.log('Retrieved user successfully!');
        console.log(res);
        return res;
    });
}

async function deleteUser(user_id) {
    const con = await dbEngine.databaseConnection();
    await con.query(`DELETE FROM user_accounts WHERE user_id=${user_id}`, (err,res) => {
        if(err) throw err;
        console.log('User deleted successfully!');
        console.log(res);
        return res;
    });
}

async function addCourt(court) {
    const con = await dbEngine.databaseConnection();
    const new_court = { court_id: court.id, court_name: court.name, court_location: court.location, hours_of_operation: court.hours};
    await con.query(`INSERT INTO tennis_courts SET ${new_court}`, (err,res) => {
        if(err) throw err;
        console.log('Court added successfully!');
        console.log(res);
        return res;
    });
}

async function getCourt(court_id) {
    const con = await dbEngine.databaseConnection();
    await con.query(`SELECT * FROM tennis_courts WHERE court_id=${court_id}`, (err,res) => {
        if(err) throw err;
        console.log('Retrieved court successfully!');
        console.log(res);
        return res;
    });
}

async function deleteCourt(court_id) {
    const con = await dbEngine.databaseConnection();
    await con.query(`DELETE FROM tennis_courts WHERE court_id=${court_id}`, (err,res) => {
        if(err) throw err;
        console.log('Court deleted successfully!');
        console.log(res);
        return res;
    });
}

async function listAllCourts() {
    const con = await dbEngine.databaseConnection();
    await con.query('SELECT * FROM tennis_courts', (err,rows) => {
        if(err) throw err;
        console.log('Listed all courts successfully!');
        var courts = [];
        rows.forEach( (row) => {
            let court = CourtData.init(row.court_id, row.court_name, row.court_location, row.hours_of_operation);
            courts.push(court);
        });
    });
}

async function addSession(session) {
    const con = await dbEngine.databaseConnection();
    const new_session = { session_id: session.id, court_id: session.court.id, session_date: session.date, time_slot: session.timeSlot, session_availability: session.isAvailability};
    await con.query(`INSERT INTO tennis_court_sessions SET ${new_session}`, (err,res) => {
        if(err) throw err;
        console.log('Session added successfully!');
        console.log(res);
        return res;
    });
}

async function getSession(session_id) {
    const con = await dbEngine.databaseConnection();
    await con.query(`SELECT * FROM tennis_court_sessions WHERE session_id=${session_id}`, (err,res) => {
        if(err) throw err;
        console.log('Retrieved session successfully!');
        console.log(res);
        return res;
    });
}

async function deleteSession(session_id) {
    const con = await dbEngine.databaseConnection();
    con.query(`DELETE FROM tennis_court_sessions WHERE session_id=${session_id}`, (err,res) => {
        if(err) throw err;
        console.log('Session deleted successfully!');
        console.log(res);
        return res;
    });
}

async function allSessionsForCourt(court) {
    const con = await dbEngine.databaseConnection();
    con.query(`SELECT * FROM tennis_court_sessions WHERE court_id=${court.id}`, (err,rows) => {
        if(err) throw err;
        console.log(`Listed all sessions for ${court.name} successfully!`);
        console.log(res);
        var sessions = [];
        rows.forEach( (row) => {
            let session = SessionData.init(court, row.date, row.timeSlot, row.isAvailability);
            sessions.push(session);
        });
    });
}

module.exports = {
  addUser: function(user) {
    return addUser(user);
  },
  getUser: function(user_id) {
    return getUser(user_id);
  },
  deleteUser: function(user_id) {
    return deleteUser(user_id);
  },
  addCourt: function(court) {
    return addCourt(court);
  },
  getCourt: function(court_id) {
    return getCourt(court_id);
  },
  deleteCourt: function(court_id) {
    return deleteCourt(court_id);
  },
  listAllCourts: function() {
    return listAllCourts();
  },
  addSession: function(session) {
    return addSession(session);
  },
  getSession: function(session_id) {
    return getSession(session_id);
  },
  deleteSession: function(session_id) {
    return deleteSession(session_id);
  },
  allSessionsForCourt: function(court_id) {
    return allSessionsForCourt(court_id);
  }
}