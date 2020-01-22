const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    latestSeasonId: {
        type: String,
        trim: true
    },
    playerIdList: [{
        type: String,
        unique: true,
        trim: true
    }],
    

}, {
    timestamps: true
})

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;