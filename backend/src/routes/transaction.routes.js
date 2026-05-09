const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth.middleware');
const {createTransaction, getTransactions} = require('../controllers/transaction.controller');

router.post('/create', verifyToken, createTransaction);
router.get('/:cuentaId', verifyToken, getTransactions);

module.exports = router;