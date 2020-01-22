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
    latestSeasonId: {
        type: String,
        trim: true
    },
    playerIdList: [String],
    

}, {
    timestamps: true
})

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;