const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    seasonId: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    teams: [[String]],
    score: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
})

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;