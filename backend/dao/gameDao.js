
let Game = require('../models/game.model');

class GameDao {
    async getAllGames(req) {
        return await Game.find();
    };

    async getGamesById(req) {
        return await Game.findById(req.params.id);
    }

    async getGamesBySeasonId(id) {
        return await Game.find({ seasonId: id });
    }

    async getGamesByAccountId(req) {
        return await Game.find({ teams: { $all: [`${req.params.id}`] } });
    }

    async addGame(newGame) {
        return await newGame.save();
    }

    async deleteGame(req) {
        return await Game.findByIdAndDelete(req.params.id);
    }

    async updateGame(req) {
        return await Game.updateOne(
            { _id: req.params.id },
            {
                seasonId: req.body.seasonId,
                date: req.body.date,
                teams: req.body.teams,
                score: req.body.score
            }
        )

    }
}

module.exports = new GameDao();