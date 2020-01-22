const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seasonSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    playerIdList: [{
            type: String,
            required: true,
            unique: true,
            trim: true
    }],
    gameIdList: [{
        gameId: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
    }]
}, {
    timestamps: true
})