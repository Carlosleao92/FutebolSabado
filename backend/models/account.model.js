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
    password: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;