let Season = require('../models/season.model');

class SeasonDao {
    async getAllSeasons(req, res) {
        return Season.find();
    };

    async getSeasonsById(req, res) {
        return Season.findById(req.params.id);
    }

    async addSeason(newSeason, res) {
        return newSeason.save();
    }

    async deleteSeason(req, res) {
        return Season.findByIdAndDelete(req.params.id);
    }

    async updateSeason(req, res) {
        return Season.updateOne(
            { _id: req.params.id },
            {
                name: req.body.name
            }
        );
    }
}

module.exports = new SeasonDao();