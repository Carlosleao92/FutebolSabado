
let Game = require('../models/game.model');

class GameDao {
    async getAllGames(req, res) {
        return Game.find()
        .then(games => res.json(games))
        .catch(err => res.status(400).json('ERROR: ' + err));
    };

    async getGamesById(req, res) {
        return Game.findById(req.params.id)
        .then(game => res.json(game))
        .catch(err => res.status(400).json('ERROR: ' + err))
    }

    async getGamesBySeasonId(req, res) {
        return Game.find({seasonId: req.params.id})
        .then(game => res.json(game))
        .catch(err => res.status(400).json('ERROR: ' + err))
    }

    async getGamesByAccountId(req, res) {
        return Game.find({teams: {$all: [`${req.params.id}`]} })
        .then(game => res.json(game))
        .catch(err => res.status(400).json('ERROR: ' + err))
    }

    async addGame(newGame, res) {
        return newGame.save()
        .then(() => res.json('user added'))
        .catch(err => res.status(400).json('ERROR: ' + err))
    }

    async deleteGame(req, res) {
        return Game.findByIdAndDelete(req.params.id)
        .then(() => {res.json('Game deleted.')})
        .catch(err => res.status(400).json('ERROR: ' + err))
    }

    async updateGame(req, res) {
        return Game.updateOne(
            {_id:req.params.id},
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName
            }
        )
        .then(() => {res.json('Game Updated')})
        .catch(err => res.status(400).json('ERROR: ' + err))
    }
}

module.exports = new GameDao();