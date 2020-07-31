CREATE TABLE user_accounts (
	user_id serial PRIMARY KEY,
    first_name VARCHAR ( 50 ) NOT NULL,
    last_name VARCHAR ( 50 ) NOT NULL,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
    user_location VARCHAR ( 100 ) NOT NULL
);

CREATE TABLE tennis_courts (
	court_id INT PRIMARY KEY,
    court_name VARCHAR ( 60 ) NOT NULL,
    court_location VARCHAR ( 60 ) NOT NULL,
	hours_of_operation int[][] NOT NULL
);

CREATE TABLE user_favourite_courts (
    user_id INT REFERENCES user_accounts (user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    court_id INT REFERENCES tennis_courts (court_id) ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (user_id, court_id)
);

CREATE TABLE tennis_court_sessions (
	session_id VARCHAR PRIMARY KEY,
    court_id INT NOT NULL,
    session_date VARCHAR ( 10 ) NOT NULL,
	time_slot VARCHAR ( 10 ) NOT NULL,
	session_availability VARCHAR ( 15 ) NOT NULL,
    FOREIGN KEY (court_id)
        REFERENCES tennis_courts (court_id)
);