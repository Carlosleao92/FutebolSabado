let Account = require('../models/account.model');
let AccountDao = require('../dao/accountDao');

class AccountBusiness {
    async getAllAccounts(req) {
        return await AccountDao.getAllAccounts(req);
    };

    async getAccountsById(id) {
        return await AccountDao.getAccountsById(id);
    };

    async getAccountsByIds(req) {
        return await AccountDao.getAccountsByIds(req);
    };

    async addAccount(req) {
        const newAccount = new Account();
        this.mapAccountData(req.body, newAccount);

        return await AccountDao.addAccount(newAccount);
    };

    async deleteAccount(req) {
        return await AccountDao.deleteAccount(req);
    };

    async updateAccount(req) {
        return await AccountDao.updateAccount(req);
    };

    mapAccountData(origin, account) {
        account.firstName = origin.firstName;
        account.lastName = origin.lastName;
    }
};

module.exports = new AccountBusiness();
