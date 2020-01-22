const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
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
    gameIdList: [{
        type: String,
        required: true,
        unique: true,
        trim: true
    }],
    

}, {
    timestamps: true
})