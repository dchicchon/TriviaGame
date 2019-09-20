const Schema = require("mongoose").Schema;

const Score = Schema({
    name: String,
    score: Number
})

module.exports = db.model('Score', Score)