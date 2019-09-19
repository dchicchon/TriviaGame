const express = require("express");
const session = require("express-session");
const app = express();
const mongoose = require("mongoose")
const uri = process.env.MONGODB_URI || "mongodb://localhost/trivia"
require("dotenv").config();
global.db = mongoose.createConnection(uri, { useNewUrlParser: true });
const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static("client/build"))
// }

app.use(session({
    key: 'user_sid',
    secret: 'surf dogs',
    resave: true,
    saveUninitialized: false,
    cookie: {
        expires: 10800000,
        httpOnly: false
    }
}))

app.use('/api', routes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server listening on PORT:", PORT)
})