const router = require('express').Router();
let Account = require('../models/account.model');
let AccountBusiness = require('../business/accountBusiness')

//get Games
router.route('/').get((req, res) => {
    AccountBusiness.getAllAccounts(req)
        .then(accounts => res.json(accounts))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

//get Game By Id
router.route('/:id').get((req, res) => {
    AccountBusiness.getAccountsById(req)
        .then(account => res.json(account))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

// TODO get game by many Id
router.route('/').post((req, res) => {
    AccountBusiness.getAccountsByIds(req)
        .then(account => res.json(account))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

//add Games
router.route('/add').post((req, res) => {
    AccountBusiness.addAccount(req)
        .then(() => res.json('user added'))
        .catch(err => res.status(400).json('ERROR: ' + err));
})

//delete by Id
router.route('/delete/:id').delete((req, res) => {
    AccountBusiness.deleteAccount(req)
        .then(() => { res.json('Account deleted.') })
        .catch(err => res.status(400).json('ERROR: ' + err));
})

//update by Id
router.route('/update/:id').post((req, res) => {
    AccountBusiness.updateAccount(req)
        .then(() => { res.json('Account Updated') })
        .catch(err => res.status(400).json('ERROR: ' + err));
})

module.exports = router;