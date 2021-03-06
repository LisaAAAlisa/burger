// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  // connect to JawsDB (heroku)
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // else connect to local database
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "*batYA5kombat$",
    database: "burgers_db"
  });
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;