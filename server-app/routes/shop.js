const express = require('express');
const productsController = require('../controllers/products')
const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/shop');
router.get('/cart');
router.get('/checkout');

module.exports = router;