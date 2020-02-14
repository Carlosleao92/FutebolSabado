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
            const latestSeason = await GameBusiness.getSeasonGameHistory(seasonDao[0]._id);
            if (latestSeason) {
                latestSeason.name=seasonDao[0].name;
                const accounts = await AccountDao.getAllAccounts();
                if (accounts) {   
                    SeasonMappers.mapAccountInfoToLatestSeason(accounts, latestSeason);
                }
                return latestSeason
            }
        }
        return null;
    };

    async getSeasonsById(id) {
        return await SeasonDao.getSeasonsById(id);
    };

    async addSeason(name) {
        const newSeason = new Season({name});
        
        return await SeasonDao.addSeason(newSeason);
    };

    async deleteSeason(id) {
        return await SeasonDao.deleteSeason(id);
    };

    async updateSeason(id, name ) {
        return await SeasonDao.updateSeason(id, name);
    };
};

module.exports = new SeasonBusiness();