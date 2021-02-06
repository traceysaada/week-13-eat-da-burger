const express = require("express");
const router = express.Router();
const burgers = require("../models/burger.js");


router.get("/", function(req, res) {
    burgers.all(function(data) {
      const hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

  router.post('/api/burgers', (req, res) => {
    burgers.create(req.body.burger_name, function(){
      res.redirect("/")
    })
  });
  
  router.put('/api/burger/:id', (req, res) => {
    const condition = id = req.params.id;
  
    console.log('condition', condition);
  
   burgers.update(
      {
        //what information needs to go here
      },
      condition,
      (result) => {
        if (result.changedRows === 0) {
         
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });

  

module.exports = router;

