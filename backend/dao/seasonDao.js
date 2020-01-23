let Season = require('../models/season.model');

class SeasonDao {
    async getAllSeasons(req, res) {
        return Season.find()
        .then(seasons => res.json(seasons))
        .catch(err => res.status(400).json('ERROR: ' + err));
    };

    async getSeasonsById(req, res) {
        return Season.findById(req.params.id)
        .then(season => res.json(season))
        .catch(err => res.status(400).json('ERROR: ' + err))
    }

    async addSeason(newSeason, res) {
        return newSeason.save()
        .then(() => res.json('Season added'))
        .catch(err => res.status(400).json('ERROR: ' + err))
    }

    async deleteSeason(req, res) {
        return Season.findByIdAndDelete(req.params.id)
        .then(() => {res.json('Season deleted.')})
        .catch(err => res.status(400).json('ERROR: ' + err))
    }

    async updateSeason(req, res) {
        return Season.updateOne(
            {_id:req.params.id},
            {
                name: req.body.name
            }
        )
        .then(() => {res.json('Season Updated')})
        .catch(err => res.status(400).json('ERROR: ' + err))
    }
}

module.exports = new SeasonDao();