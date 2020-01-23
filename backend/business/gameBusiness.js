let Game = require('../models/game.model');
let GameDao = require('../dao/gameDao');

class GameBusiness {
    async getAllGames(req, res) {
        return await GameDao.getAllGames(req, res);
    };

    async getGamesById(req, res) {
        return await GameDao.getGamesById(req, res);
    };

    async getGamesBySeasonId(req, res) {
        return await GameDao.getGamesBySeasonId(req, res);
    };

    async getGamesByAccountId(req, res) {
        return await GameDao.getGamesByAccountId(req, res);
    };

    async addGame(req, res) {
        const newGame = new Game();
        this.mapGameData(req.body, newGame);

        return await GameDao.addGame(newGame, res);
    };

    async deleteGame(req, res) {
        return await GameDao.deleteGame(req, res);
    };

    async updateGame(req, res) {
        return await GameDao.updateGame(req, res);
    };

    mapGameData(origin, game) {
        game.firstName = origin.firstName;
        game.lastName = origin.lastName;
    }
};

module.exports = new GameBusiness();
