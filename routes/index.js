var express = require('express');
var app = express();
var scoreController = require("../controllers/scoreController");

app.get("/scores", function (req, res) {
    console.log("Get")
    scoreController.getScore(req, res);
})

app.post("/scores", function (req, res) {
    console.log("Post");
    scoreController.createScore(req, res);
})

app.get('/', function (req, res) {
    res.render('./index.html')
});

module.exports = app