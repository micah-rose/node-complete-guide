const express = require('express');
const shopController = require('../controllers/shop')
const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/shop', shopController.getProducts);
router.get('/cart');
router.get('/checkout');

module.exports = router;