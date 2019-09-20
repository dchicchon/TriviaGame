const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const uri = process.env.MONGODB_URI || "mongodb://localhost/trivia"
require("dotenv").config();

// Global DB
global.db = mongoose.createConnection(uri, { useNewUrlParser: true });

const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(express.static('public'))

app.use('/api', routes)

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Credentials", 'true');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next()
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server listening on PORT:", PORT)
})