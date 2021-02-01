const express = require("express");
const router = express.Router();
const burgers = require("../models/burger.js");



router.get("/", function(req, res) {
    burgers.all(function(data) {
      const hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });




module.exports = router;

