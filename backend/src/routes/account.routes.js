const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth.middleware');
const { createAccount, getAccounts } = require('../controllers/account.controller');

router.post('/create', verifyToken, createAccount);
router.get('/my-accounts', verifyToken, getAccounts);
module.exports = router;