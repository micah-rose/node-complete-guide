const express = require('express');
const productsController = require('../controllers/shop')
const router = express.Router();

router.get('/add-product', productsController.getAddProduct);
router.get('/products');

router.post('/add-product', productsController.postAddProduct)

module.exports = router;

