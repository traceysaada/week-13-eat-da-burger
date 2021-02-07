const connection = require("./connection.js");
const orm = {
  selectAll: function (tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      return cb(result);
    });
  },

  insertOne: function (name, cb) {
    const queryString =
      "INSERT INTO burgers (burger_name) VALUES ('" + name + "');";

    console.log(queryString);

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function (id, cb) {
    const queryString =
      "UPDATE burgers SET devoured = true WHERE id =" + id + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
