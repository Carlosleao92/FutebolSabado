let Season = require('../models/season.model');
let SeasonDao = require('../dao/seasonDao');

class SeasonBusiness {
    async getAllSeasons(req, res) {
        return await SeasonDao.getAllSeasons(req, res);
    };

    async getSeasonsById(req, res) {
        return await SeasonDao.getSeasonsById(req, res);
    };

    async addSeason(req, res) {
        const name = req.body.name;
        const newSeason = new Season({name});
        
        return await SeasonDao.addSeason(newSeason, res);
    };

    async deleteSeason(req, res) {
        return await SeasonDao.deleteSeason(req, res);
    };

    async updateSeason(req, res) {
        return await SeasonDao.updateSeason(req, res);
    };
};

module.exports = new SeasonBusiness();