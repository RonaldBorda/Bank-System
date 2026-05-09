const express = require('express');

const router = express.Router();

const verifyToken = require('../middlewares/auth.middleware');

const {
    payService
} = require('../controllers/payment.controller');

router.post('/pay', verifyToken, payService);

module.exports = router;