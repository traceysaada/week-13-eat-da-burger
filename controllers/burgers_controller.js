const express = require("express");
const router = express.Router();
const burgers = require("../models/burger.js");

router.get("/", function (req, res) {
  burgers.all(function (data) {
    const hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burgers.create(req.body.burger_name, function () {
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", (req, res) => {
  burgers.update(req.params.id, function (result) {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;
