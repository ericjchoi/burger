// In order to use .env
require("dotenv").config();

// require mysql
var mysql = require("mysql");
var connection;

// Set up connection information
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.MYSQL_PW,
        database: "burgers_db"
    });
};

// Connect to database
connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
