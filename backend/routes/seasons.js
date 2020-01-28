const router = require('express').Router();
let SeasonBusiness = require('../business/seasonBusiness')
let Season = require('../models/season.model');

router.route('/').get((req, res) => {
    SeasonBusiness.getAllSeasons(req)
        .then(seasons => res.json(seasons))
        .catch(err => res.status(400).json('ERROR: ' + err));
});
router.route('/latest').get((req, res) => {
    SeasonBusiness.getLatestSeason(req)
        .then(seasons => res.json(seasons))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route('/:id').get((req, res) => {
    SeasonBusiness.getSeasonsById(req)
        .then(season => res.json(season))
        .catch(err => res.status(400).json('ERROR: ' + err))
});

router.route('/add').post((req, res) => {
    SeasonBusiness.addSeason(req)
        .then(() => res.json('Season added'))
        .catch(err => res.status(400).json('ERROR: ' + err))
})

router.route('/delete/:id').delete((req, res) => {
    SeasonBusiness.deleteSeason(req)
        .then(() => { res.json('Season deleted.') })
        .catch(err => res.status(400).json('ERROR: ' + err))
})

router.route('/update/:id').post((req, res) => {
    SeasonBusiness.updateSeason(req)
        .then(() => { res.json('Season Updated') })
        .catch(err => res.status(400).json('ERROR: ' + err))
})

module.exports = router;