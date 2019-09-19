var router = require('express').Router();
var path = require('path');

router.get("/scores", function (req, res) {
    console.log("Get")
})

router.post("/scores", function (req, res) {
    console.log("Post");
})

router.use('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports = router