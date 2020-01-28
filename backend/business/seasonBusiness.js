let Season = require('../models/season.model');
let SeasonDao = require('../dao/seasonDao');

class SeasonBusiness {
    async getAllSeasons(req) {
        return await SeasonDao.getAllSeasons(req);
    };

    async getLatestSeason(req) {
        return await SeasonDao.getLatestSeason(req);
    };

    async getSeasonsById(req) {
        return await SeasonDao.getSeasonsById(req);
    };

    async addSeason(req) {
        const name = req.body.name;
        const newSeason = new Season({name});
        
        return await SeasonDao.addSeason(newSeason);
    };

    async deleteSeason(req) {
        return await SeasonDao.deleteSeason(req);
    };

    async updateSeason(req) {
        return await SeasonDao.updateSeason(req);
    };
};

module.exports = new SeasonBusiness();