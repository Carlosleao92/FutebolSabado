let Season = require('../models/season.model');
let SeasonDao = require('../dao/seasonDao');
let AccountDao = require('../dao/accountDao');
let SeasonMappers = require('../mappers/SeasonMapper');
let GameBusiness = require('../business/gameBusiness')

class SeasonBusiness {
    async getAllSeasons() {
        return await SeasonDao.getAllSeasons();
    };

    async getLatestSeason() {
        const seasonDao = await SeasonDao.getLatestSeason();
        if (seasonDao) {
            return this.getSeasonDetails(seasonDao[0]._id, seasonDao[0].name);
        }
        return null;
    };

    async getSeasonsById(id) {
        let season = await SeasonDao.getSeasonsById(id);
        return await this.getSeasonDetails(id, season.name)
    };

    async getSeasonDetails(id, name) {
        const season = await GameBusiness.getSeasonGameHistory(id);
        if (season) {
            const accounts = await AccountDao.getAllAccounts();
            if (accounts) {
                SeasonMappers.mapAccountInfoToLatestSeason(accounts, season);
            }
            season.name = name;
            return season
        }
        return null;
    }

    async addSeason(name) {
        const newSeason = new Season({ name });

        return await SeasonDao.addSeason(newSeason);
    };

    async deleteSeason(id) {
        return await SeasonDao.deleteSeason(id);
    };

    async updateSeason(id, name) {
        return await SeasonDao.updateSeason(id, name);
    };
};

module.exports = new SeasonBusiness();