const dbEngine = require('./databaseEngine.js')
const UserData = require('./UserData.js')
const CourtData = require('./CourtData.js')
const SessionData = require('./SessionData.js')

async function addUser(user) {
    const con = await dbEngine.databaseConnection();
    await con.query(`INSERT INTO user_accounts (first_name, last_name, username, password, email, user_location) VALUES ('${user.first_name}', '${user.last_name}', '${user.username}', '${user.password}', '${user.email}', '${user.location}')`, function(err,res) {
      if(err) throw err;
      console.log('User added successfully!');
    });
}

async function getUser(user_id) {
    const con = await dbEngine.databaseConnection();
    await con.query(`SELECT * FROM user_accounts WHERE user_id='${user_id}'`, (err,res) => {
        if(err) throw err;
        console.log('Retrieved user successfully!');
        return res['rows'];
    });
}

async function getAllUsers(user_id) {
  const con = await dbEngine.databaseConnection();
  await con.query(`SELECT * FROM user_accounts`, (err,rows) => {
      if(err) throw err;
      console.log('Retrieved all users successfully!');
      let query_result = rows['rows'];
      var users = [];
      Object.keys(query_result).forEach(function(key) {
          let user = UserData.init(query_result[key].first_name, query_result[key].last_name, query_result[key].username, query_result[key].password, query_result[key].email, query_result[key].user_location);
          users.push(user);
      });
      return users;
  });
}

async function addUserFavourite(user_id, court_id) {
  const con = await dbEngine.databaseConnection();
  await con.query(`INSERT INTO user_favourite_courts VALUES ('${user_id}','${court_id}')`, (err,res) => {
      if(err) throw err;
      console.log('User favourite added');
  });
}

async function getUserFavourite(user_id) {
  const con = await dbEngine.databaseConnection();
  await con.query(`SELECT * FROM user_favourite_courts WHERE user_id='${user_id}'`, (err,res) => {
      if(err) throw err;
      console.log('User favourite retrieved succesfully!');
  });
}

async function deleteUser(user_id) {
    const con = await dbEngine.databaseConnection();
    await con.query(`DELETE FROM user_accounts WHERE user_id='${user_id}'`, (err,res) => {
        if(err) throw err;
        console.log('User deleted successfully!');
    });
}

async function addCourt(court) {
    const con = await dbEngine.databaseConnection();
    await con.query(`INSERT INTO tennis_courts (court_id, court_name, court_location, hours_of_operation) VALUES ('${court.id}', '${court.name}', '${court.location}', '${court.hours}')`, (err,res) => {
        if(err) throw err;
        console.log('Court added successfully!');
    });
}

async function getCourt(court_id) {
    const con = await dbEngine.databaseConnection();
    await con.query(`SELECT * FROM tennis_courts WHERE court_id='${court_id}'`, (err,res) => {
        if(err) throw err;
        console.log('Retrieved court successfully!');
        return res['rows'];
    });
}

async function deleteCourt(court_id) {
    const con = await dbEngine.databaseConnection();
    await con.query(`DELETE FROM tennis_courts WHERE court_id='${court_id}'`, (err,res) => {
        if(err) throw err;
        console.log('Court deleted successfully!');
    });
}

async function listAllCourts() {
    const con = await dbEngine.databaseConnection();
    await con.query('SELECT * FROM tennis_courts', (err,rows) => {
        if(err) throw err;
        console.log('Listed all courts successfully!');
        let query_result = rows['rows'];
        var courts = [];
        Object.keys(query_result).forEach(function(key) {
            let court = CourtData.init(query_result[key].court_id, query_result[key].court_name, query_result[key].court_location, query_result[key].hours_of_operation);
            courts.push(court);
        });
        return courts;
    });
}

async function addSession(session) {
    const con = await dbEngine.databaseConnection();
    await con.query(`INSERT INTO tennis_court_sessions VALUES ('${session.id}','${session.court.id}','${session.date}','${session.timeSlot}','${session.isAvailability}')`, (err,res) => {
        if(err) throw err;
        console.log('Session added successfully!');
    });
}

async function getSession(session_id) {
    const con = await dbEngine.databaseConnection();
    await con.query(`SELECT * FROM tennis_court_sessions WHERE session_id='${session_id}'`, (err,res) => {
        if(err) throw err;
        console.log('Retrieved session successfully!');
        console.log(res['rows']);
        return res['rows'];
    });
}

async function deleteSession(session_id) {
    const con = await dbEngine.databaseConnection();
    con.query(`DELETE FROM tennis_court_sessions WHERE session_id='${session_id}'`, (err,res) => {
        if(err) throw err;
        console.log('Session deleted successfully!');
    });
}

async function allSessionsForCourt(court) {
    const con = await dbEngine.databaseConnection();
    con.query(`SELECT * FROM tennis_court_sessions WHERE court_id='${court.id}'`, (err,rows) => {
        if(err) throw err;
        console.log(`Listed all sessions for ${court.name} successfully!`);
        query_result = rows['rows'];
        var sessions = [];
        Object.keys(query_result).forEach(function(key) {
            let session = SessionData.init(court, query_result[key].session_date, query_result[key].time_slot, query_result[key].session_availability);
            sessions.push(session);
        });
        return sessions;
    });
}

module.exports = {
  addUser: function(user) {
    return addUser(user);
  },
  getUser: function(user_id) {
    return getUser(user_id);
  },
  getAllUsers: function() {
    return getAllUsers();
  },
  addUserFavourite: function(user_id, court_id) {
    return addUserFavourite(user_id, court_id);
  },
  getUserFavourite: function(user_id) {
    return getUserFavourite(user_id);
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