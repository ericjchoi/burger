// in order to use .env
require("dotenv").config();

// require mysql
var mysql = require("mysql");

// set up connection information
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PW,
    database: "burgers_db"
});

// connect to database
connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// export connection
module.exports = connection;
