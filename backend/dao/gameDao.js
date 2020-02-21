
let Game = require('../models/game.model');

class GameDao {
    async getAllGames() {
        return await Game.find();
    };

    async getGamesById(id) {
        return await Game.findById(id);
    }

    async getGamesBySeasonId(id) {
        return await Game.find({ seasonId: id });
    }

    async getGamesByAccountId(id) {
        return await Game.find({ teams: { $all: [`${id}`] } });
    }

    async addGame(newGame) {
        return await newGame.save();
    }

    async deleteGame(id) {
        return await Game.findByIdAndDelete(id);
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