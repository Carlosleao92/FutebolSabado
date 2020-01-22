const router = require('express').Router();
let Season = require('../models/season.model');

router.route('/').get((req, res) => {
    Season.find()
        .then(seasons => res.json(seasons))
        .catch(err => res.status(400).json('ERROR: ' + err))
});

router.route('/:id').get((req, res) => {
    Season.findById(req.params.id)
        .then(season => res.json(season))
        .catch(err => res.status(400).json('ERROR: ' + err))
});

router.route('/add').post((req, res) => {
    const name = req.body.name;

    const newSeason = new Season({name});

    newSeason.save()
        .then(seasons => res.json('user added'))
        .catch(err => res.status(400).json('ERROR: ' + err))
})

router.route('/delete/:id').delete((req, res) => {
    Season.findByIdAndDelete(req.params.id)
        .then(() => {res.json('Season deleted.')})
        .catch(err => res.status(400).json('ERROR: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Season.findById(req.params.id)
        .then((season) => {
            season.name = req.body.name;

            season.save()
                .then(() => {res.json('Season Updated')})
                .catch(err => res.status(400).json('ERROR: ' + err))
        })
        .catch(err => res.status(400).json('ERROR: ' + err))
})

module.exports = router;