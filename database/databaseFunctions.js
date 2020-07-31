var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: "",
    port: 5432
});

con.connect((err) => {
    if(err){
        console.log('Error connecting to database');
        return;
    }
    console.log('Connection established!');
});

function addUser(user) {
    const new_user = { first_name: user.first_name, last_name: user.last_name, username: user.username, password: user.password, email: user.email, user_location: user.location};
    con.query('INSERT INTO user_accounts SET ?', new_user, (err,res) => {
        if(err) throw err;
        console.log('User added successfully!');
    });
}

function deleteUser(user) {
    con.query('DELETE FROM user_accounts WHERE user_id ?', user.id, (err,res) => {
        if(err) throw err;
        console.log('User deleted successfully!');
    });
}

function addCourt(court) {
    const new_court = { court_id: court.id, court_name: court.name, court_location: court.location, hours_of_operation: court.hours};
    con.query('INSERT INTO tennis_courts SET ?', new_court, (err,res) => {
        if(err) throw err;
        console.log('Court added successfully!');
    });
}

function deleteCourt(court) {
    con.query('DELETE FROM tennis_courts WHERE court_id ?', court.id, (err,res) => {
        if(err) throw err;
        console.log('Court deleted successfully!');
    });
}

function listAllCourts() {
    con.query('SELECT * FROM tennis_courts', (err,rows) => {
        if(err) throw err;
        console.log('Listed all courts successfully!');
        return rows;
    });
}

function addSession(session) {
    const new_session = { session_id: session.id, court_id: session.court.id, session_date: session.date, time_slot: session.timeSlot, session_availability: session.isAvailability};
    con.query('INSERT INTO tennis_court_sessions SET ?', new_court, (err,res) => {
        if(err) throw err;
        console.log('Session added successfully!');
    });
}

function deleteSession(session) {
    con.query('DELETE FROM tennis_court_sessions WHERE session_id ?', session.id, (err,res) => {
        if(err) throw err;
        console.log('Session deleted successfully!');
    });
}

function allSessionsForCourt(court) {
    con.query('SELECT * FROM tennis_court_sessions WHERE court_id ?', court.id, (err,rows) => {
        if(err) throw err;
        console.log(`Listed all sessions for ${court.name} successfully!`);
        return rows;
    });  
}

module.exports = {
  addUser: function(user) {
    return addUser(user);
  },
  deleteUser: function(user) {
    return deleteUser(user);
  },
  addCourt: function(court) {
    return addCourt(court);
  },
  deleteCourt: function(court) {
    return deleteCourt(court);
  },
  listAllCourts: function(court) {
    return listAllCourts(court);
  },
  addSession: function(session) {
    return addSession(session);
  },
  deleteSession: function(session) {
    return deleteSession(session);
  },
  deletallSessionsForCourteSession: function(court) {
    return allSessionsForCourt(court);
  }
}