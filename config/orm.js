const connection = require("./connection.js");


//SEE COLUM SO I NEED TO CALL THESE IN THE BELOW FUNCTION BRACKETS
const orm = {
  selectAll: function (tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput + ";" ;

    connection.query(
      queryString,
      function (err, result) {
        if (err) throw err;
        return cb(result);
      }
    );
  },

  insertOne: function () {
    const queryString = "INSERT INTO" + tableInput;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function () {
    const queryString = "UPDATE" + tableInput;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  }


module.exports = orm;
