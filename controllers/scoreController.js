const Score = require("../models/Score")

module.exports = {
    getScore: (req, res) => {
        console.log("Get Controller")
        Score.find()
            .then(dbScore => {
                console.log(dbScore)
                res.json(dbScore)
            })

    },

    createScore: (req, res) => {
        console.log("Post Controller")
        Score.create(req.body)
            .then(dbScore => {
                // console.log(dbScore)
                res.send("Success");
            })
    }
}