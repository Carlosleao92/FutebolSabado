let Game = require('../models/game.model');
let GameDao = require('../dao/gameDao');

class GameBusiness {
    async getAllGames(req) {
        return await GameDao.getAllGames(req);
    };

    async getGamesById(req) {
        return await GameDao.getGamesById(req);
    };

    async getGamesBySeasonId(req) {
        return await GameDao.getGamesBySeasonId(req);
    };

    async getAccountGameHistory(req) {
        let accountGameList = await GameDao.getGamesByAccountId(req);
        if (accountGameList) {
            return this.buildAccountDataBySeason(accountGameList, req.params.id);
        }
        return gameList;
    };

    buildAccountDataBySeason(accountGameList, accountId) {
        let data = [];
        for (let game of accountGameList) {
            if (!this.isSeasonAlreadyRegistered(game.seasonId, data)) {
                this.registerSeasonInData(data, game);
            }
            this.addGameToSeason(data, game);
        }
        for (let season of data) { this.calculateSeasonStats(season, accountId); }
        return data;
    }

    calculateSeasonStats(season, accountId) {
        let presences = 0;
        let wins = 0;
        let draws = 0;
        let points = 0;

        for (let game of season.gameList) {
            presences += 1;

            let teamSide = 0;
            game.teams.indexOf(accountId) < 5 ? teamSide = 1 : teamSide = -1;

            let goals = game.score.split("-");
            let goalDifference = (goals[0] - goals[1]) * teamSide
            let scoreCase = Math.sign(goalDifference);
            switch (scoreCase) {
                case 1:
                    wins += 1;
                    points += this.getPointsByGoalDifference(goalDifference);
                    break;
                case 0:
                    draws += 1;
                    points += 1
                    break;
                case -1:
                    points += 0.5;
                    break;
            }
        }

        season.presences = presences;
        season.wins = wins;
        season.draws = draws;
        season.points = points;
    }

    registerSeasonInData(data, game) {
        data.push({
            seasonId: game.seasonId,
            gameList: [],
        })
    };


    addGameToSeason(data, game) {
        for (let season of data) {
            if (season.seasonId === game.seasonId) {
                season.gameList.push(game);
                break;
            }
        }
    };

    isSeasonAlreadyRegistered(seasonId, seasonData) {
        for (let season of seasonData) {
            if (season.seasonId === seasonId) {
                return true;
            }
        }
        return false;
    };

    getPointsByGoalDifference(goalDifference) {
        let points = 0;
        switch (goalDifference) {
            case 1:
                points += 2;
                break;
            case 2:
                points += 2.5;
                break;
            case 3:
                points += 3;
                break;
            case 4:
                points += 3.5;
                break;
            default:
                points += 3.5 + (goalDifference - 4) * 0.3;
                break;
        }
        return points;
    }

    async addGame(req) {
        const newGame = new Game();
        this.mapGameData(req.body, newGame);

        return await GameDao.addGame(newGame);
    };

    async deleteGame(req) {
        return await GameDao.deleteGame(req);
    };

    async updateGame(req) {
        return await GameDao.updateGame(req);
    };

    mapGameData(origin, game) {
        game.seasonId = origin.seasonId;
        game.date = origin.date;
        game.teams = origin.teams;
        game.score = origin.score;
    }
};

module.exports = new GameBusiness();
