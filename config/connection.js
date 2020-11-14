// Set up MySQL connection.
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "password",
  database: "burger_db",
});
};
  

// Make connection.
// Export connection for our ORM to use.
connection.connect(error => error ? console.log(error) : console.log(`connected to database ${connection.threadId}`));
module.exports = connection;
