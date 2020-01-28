let Game = require('../models/game.model');
let GameDao = require('../dao/gameDao');

class GameBusiness {
    async getAllGames(req) {
        return await GameDao.getAllGames(req);
    };

    async getGamesById(req) {
        return await GameDao.getGamesById(req);
    };

    async getSeasonGameHistory(req) {
        let seasonGameList = await GameDao.getGamesBySeasonId(req);
        if (seasonGameList) {
            return this.buildSeasonData(seasonGameList);
        }
        return seasonGameList
    };

    async getAccountGameHistory(req) {
        let accountGameList = await GameDao.getGamesByAccountId(req);
        if (accountGameList) {
            return this.buildAccountData(accountGameList, req.params.id);
        }
        return accountGameList;
    };

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
    };

    buildSeasonData(seasonGameList) {
        let accountDataList = [];
        for (let game of seasonGameList) {
            for (let accountId of game.teams) {
                if (!this.isAccountAlreadyRegistered(accountId, accountDataList)) {
                    this.addAccountToList(accountId, accountDataList);
                }
                
                this.calculateAccountGameStats(game, accountId, accountDataList);
            }
        }
        return {seasonGameList: seasonGameList, accountDataList: accountDataList};
    }

    buildAccountData(accountGameList, accountId) {
        let data = [];
        for (let game of accountGameList) {
            if (!this.isSeasonAlreadyRegistered(game.seasonId, data)) {
                this.registerSeasonInData(data, game);
            }
            this.addGameToSeason(data, game);
        }
        for (let season of data) { this.calculateSeasonStats(season, accountId); }
        return data;
    };

    registerSeasonInData(data, game) {
        data.push({
            seasonId: game.seasonId,
            gameList: [],
        })
    };

    addAccountToList(playerId, accountDataList) {
        accountDataList.push({
            id: playerId,
            stats: {presences: 0, wins: 0, draws: 0, points: 0} 
        });
    };

    addGameToSeason(data, game) {
        for (let season of data) {
            if (season.seasonId === game.seasonId) {
                season.gameList.push(game);
                break;
            }
        }
    };

    isAccountAlreadyRegistered(accountId, accountDataList) {
        for (let account of accountDataList) {
            if (account.id === accountId) {
                return true;
            }
        }
        return false;
    };

    isSeasonAlreadyRegistered(seasonId, seasonData) {
        for (let season of seasonData) {
            if (season.seasonId === seasonId) {
                return true;
            }
        }
        return false;
    };

    calculateAccountGameStats(game, accountId, accountDataList) {
        let accountData = accountDataList.find(element => element.id === accountId);
        let stats = accountData.stats;
        this.calculateGameStats(game, accountId, stats);
        accountData.stats = stats;
    }

    calculateSeasonStats(season, accountId) {
        let stats = {presences: 0, wins: 0, draws: 0, points: 0};
        for (let game of season.gameList) {
            this.calculateGameStats(game, accountId, stats);
        }

        season.presences = stats.presences;
        season.wins = stats.wins;
        season.draws = stats.draws;
        season.points = stats.points;
    };

    calculateGameStats(game, accountId, stats) {
        stats.presences += 1;

        let teamSide = 0;
        game.teams.indexOf(accountId) < 5 ? teamSide = 1 : teamSide = -1;

        let goals = game.score.split("-");
        let goalDifference = (goals[0] - goals[1]) * teamSide
        let scoreCase = Math.sign(goalDifference);
        switch (scoreCase) {
            case 1:
                stats.wins += 1;
                stats.points += this.getPointsByGoalDifference(goalDifference);
                break;
            case 0:
                stats.draws += 1;
                stats.points += 1
                break;
            case -1:
                stats.points += 0.5;
                break;
        }
    }

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
    };
};

module.exports = new GameBusiness();
