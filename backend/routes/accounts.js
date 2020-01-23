const router = require('express').Router();
let Account = require('../models/account.model');
let AccountBusiness = require('../business/accountBusiness')

//get Games
router.route('/').get((req, res) => {
    AccountBusiness.getAllAccounts(req, res);
});

//get Game By Id
router.route('/:id').get((req, res) => {
    AccountBusiness.getAccountsById(req, res);
});

//add Games
router.route('/add').post((req, res) => {
    AccountBusiness.addAccount(req, res);
})

//delete by Id
router.route('/delete/:id').delete((req, res) => {
    AccountBusiness.deleteAccount(req, res);
})

//update by Id
router.route('/update/:id').post((req, res) => {
    AccountBusiness.updateAccount(req, res);   
})

module.exports = router;