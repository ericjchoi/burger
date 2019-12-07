// import the orm.js file to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    // select all burgers from table in burgers_db
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    // add one burger into table in burgers_db
    insertOne: function (cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, function (res) {
            callback(res);
        });
    },
    // update table with changed burger information
    updateOne: function (objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            callback(res);
        });
    },
    // delete clicked burger from burgers_db.
    deleteOne: function (condition, callback) {
        orm.deleteOne("burgers", condition, function (res) {
            callback(res);
        });
    }
};

// export the database functions for the controller burgers_controller.js
module.exports = burger;