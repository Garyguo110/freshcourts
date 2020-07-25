# PostgreSQL Database
This is the database backing our servers.
This directory will store SQL files which define tables and configurations for initialization.

### Install postgresql:
```
brew install postgresql
```

### Connecting to postgresql local:
```
brew services start postgresql

psql postgres

// Now you can run commands e.g. test_table commands
...

// Stop the service with:
brew services stop postgresql
```

### Connecting to postgresql Heroku:
```
heroku pg:psql

// Now you can run commands e.g. test_table commands
...

//Exit with:
quit
```
