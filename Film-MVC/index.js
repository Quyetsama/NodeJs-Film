const express = require("express");
const app = express();

const route = require("./routes");
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
// Connect to db
db.connect();

// const request = require("request");

// HaPAYHhvuT9BGGWh

// "mongodb+srv://quyetsama:HaPAYHhvuT9BGGWh@filmnodejs.ump4j.mongodb.net/film?retryWrites=true&w=majority"



app.use(express.static("public"));

app.set("view engine", "ejs");

route(app);


app.listen("3000", function(){
    console.log("Server is running!!!");
});