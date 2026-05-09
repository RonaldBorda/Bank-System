const express = require('express');

const router = express.Router();

const verifyToken = require('../middlewares/auth.middleware');

const {
    createTransaction
} = require('../controllers/transaction.controller');

router.post('/create', verifyToken, createTransaction);

module.exports = router;