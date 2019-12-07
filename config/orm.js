// import mysql connection
var connection = require("../config/connection.js");


// helper function for sql syntax
// array of ?, turns into a string
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// helper function to convert object key/value pairs to sql syntax
function objToSql(ob) {
    var arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Very Yummy Burger => 'Very Yummy Burger')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {burger_name: 'Very Yummy Burger'} => ["burger_name='Very Yummy Burger'"]
            // e.g. {devoured: true} => ["devoured=true"]
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}
// ORM
var orm = {
    // display all burgers from table in burgers_db
    selectAll: function (tableName, callback) {
        var queryString = "SELECT * FROM " + tableName + ";";

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    // add one burger into table in burgers_db
    insertOne: function (tableName, cols, vals, callback) {
        var queryString = "INSERT INTO " + tableName;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    // update table with devoured burger
    // an example of objColVals would be {burger_name: Yummy Burger, devoured: true}
    updateOne: function (tableName, objColVals, condition, callback) {
        var queryString = "UPDATE " + tableName;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    // delete clicked burger from the burgers_db.
    deleteOne: function (tableName, condition, callback) {
        var queryString = "DELETE FROM " + tableName;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err
            }
            callback(result);
        });
    }
};

// export the orm object for the model burger.js
module.exports = orm;