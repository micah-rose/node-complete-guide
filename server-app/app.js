const express = require('express');

const app = express();

//app.use([path,] callback [, path])
app.use('/add-product', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>The "Add Product" Page</h1>'); //allows us to send a response and attach a body
});

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express!!</h1>'); //allows us to send a response and attach a body
});

app.listen(3002);