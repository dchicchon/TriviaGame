const Score = require("../models/Score")

module.exports = {
    getScore: (req, res) => {
        Score.find()
            .then(dbScore => {
                console.log(dbScore)
                res.json(dbScore)
            })

    },

    createScore: (req, res) => {
        console.log(req.body)
        Score.create(req.body)
            .then(dbScore => {
                console.log(dbScore)
                res.json(dbScore)
            })
    },

    // deleteAnimal: (req, res) => {
    //     Animal.findByIdAndDelete(
    //         req.params.id)
    //         .then(dbScore => {
    //             console.log("Animal Deleted");
    //             res.json("Animal Deleted")
    //         })
    // }
}