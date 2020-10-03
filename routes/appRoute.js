const express = require('express');

const { signup, getBill } = require('../controllers/appController');

const router = express.Router();

// /api/user/signup
router.post('/user/signup')

// /api/user/signup
router.post('/product/get-the-bill')

module.exports = router;