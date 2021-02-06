const orm = require("../config/orm.js");

const burgers = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  create: function (name, cb) {
    orm.insertOne(name, cb);
  },
  update: function (cb) {
    orm.updateOne("burgers", function (res) {
      cb(res);
    });
  },
};

module.exports = burgers;
