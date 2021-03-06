const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seasonSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
})

const Season = mongoose.model('Season', seasonSchema);

module.exports = Season;