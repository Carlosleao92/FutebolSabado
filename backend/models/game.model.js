const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    id: {
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