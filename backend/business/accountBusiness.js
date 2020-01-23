let Account = require('../models/account.model');
let AccountDao = require('../dao/accountDao');

class AccountBusiness {
    async getAllAccounts(req, res) {
        return await AccountDao.getAllAccounts(req, res);
    };

    async getAccountsById(req, res) {
        return await AccountDao.getAccountsById(req, res);
    };

    async addAccount(req, res) {
        const newAccount = new Account();
        this.mapAccountData(req.body, newAccount);

        return await AccountDao.addAccount(newAccount, res);
    };

    async deleteAccount(req, res) {
        return await AccountDao.deleteAccount(req, res);
    };

    async updateAccount(req, res) {
        return await AccountDao.updateAccount(req, res);
    };

    mapAccountData(origin, account) {
        account.firstName = origin.firstName;
        account.lastName = origin.lastName;
    }
};

module.exports = new AccountBusiness();
