let Season = require('../models/season.model');

class SeasonDao {
    async getAllSeasons() {
        return Season.find();
    };

    async getLatestSeason() {
        return Season.find().sort({"createdAt": -1}).limit(1);
    };

    async getSeasonsById(id) {
        return Season.findById(id);
    }

    async addSeason(newSeason) {
        return newSeason.save();
    }

    async deleteSeason(id) {
        return Season.findByIdAndDelete(id);
    }

    async updateSeason(id, name) {
        return Season.updateOne(
            { _id: id },
            {
                name: name
            }
        );
    }
}

module.exports = new SeasonDao();