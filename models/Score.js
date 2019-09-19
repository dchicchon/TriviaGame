const Schema = require("mongoose").Schema;

const Score = Schema({
    name: String,
    species: String
})

module.exports = db.model('Score', Score)