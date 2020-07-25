# PostgreSQL Database
This is the database backing our servers.

### Install postgresql:
```
brew install postgresql
```

### Connecting to postgresql local:
```
brew services start postgresql

psql postgres

// Now you can run commands e.g. test_table commands
create table test_table (id integer, name text);
insert into test_table values (1, 'hello database');

// Stop the service with:
brew services stop postgresql
```

### Connecting to postgresql Heroku:
```
heroku pg:psql

// Now you can run commands e.g. test_table commands
create table test_table (id integer, name text);
insert into test_table values (1, 'hello database');

//Exit with:
quit
```
