const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    accountId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    seasonId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
}, {
    timestamps: true
})

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;