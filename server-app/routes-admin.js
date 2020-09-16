const express = require('express');
const router = express.Router();

router.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
})

router.get('/add-product', (req, res, next) => {
    console.log('In another middleware');
    res.send('<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'); 
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;
