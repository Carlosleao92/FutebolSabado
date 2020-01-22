const router = require('express').Router();
let Player = require('../models/Player.model');

router.route('/').get((req, res) => {
    Player.find()
        .then(players => res.json(players))
        .catch(err => res.status(400).json('ERROR: ' + err))
});

router.route('/:id').get((req, res) => {
    Player.findById(req.params.id)
        .then(player => res.json(player))
        .catch(err => res.status(400).json('ERROR: ' + err))
});

router.route('/add').post((req, res) => {
    const accountId = req.body.accountId;  
    const seasonId = req.body.seasonId;
    const gameIdList = req.body.gameIdList;

    const newSeason = new Player({accountId, seasonId,  gameIdList});

    newSeason.save()
        .then(players => res.json('user added'))
        .catch(err => res.status(400).json('ERROR: ' + err))
})

router.route('/delete/:id').delete((req, res) => {
    Player.findByIdAndDelete(req.params.id)
        .then(() => {res.json('Player deleted.')})
        .catch(err => res.status(400).json('ERROR: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Player.findById(req.params.id)
        .then((player) => {
            player.accountId = req.body.accountId;
            player.seasonId = req.body.seasonId;
            player.gameIdList = req.body.gameIdList;
            
            player.save()
                .then(() => {res.json('Player Updated')})
                .catch(err => res.status(400).json('ERROR: ' + err))
        })
        .catch(err => res.status(400).json('ERROR: ' + err))
})

module.exports = router;