const express = require("express");
const session = require("express-session");
const app = express();
require("dotenv").config();


const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"))
}

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

app.use(routes)

const server = app.listen(process.env.PORT || 5000, function () {
    let port = server.address().port;
    console.log(`Server is listening on PORT ${port}`)
})