const connection = require("./connection.js");

const orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
      const queryString = "SELECT * FROM ?? WHERE ?? = ?";
  
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        return result;
      });
    },

    insertOne: function() {

    },

    updateOne: function() {


    }
  };
  
  module.exports = orm;
  