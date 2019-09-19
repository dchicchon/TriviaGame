// var router = require('express').Router();
var express = require('express');
var app = express();
// var scoreController = require("../controllers/scoreController");
// var path = require('path');

// router.get("/scores", function (req, res) {
//     console.log("Get")
//     scoreController.getScore();
// })

// router.post("/scores", function (req, res) {
//     console.log("Post");
//     scoreController.createScore();
// })

app.get('/', function (req, res) {
    res.render('./index.html')
});

module.exports = app