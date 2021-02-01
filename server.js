const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const orm = require("./config/orm.js");

const data = orm.selectWhere();

console.log(data); 


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));





app.listen(PORT, () => console.log("aplication is running"));