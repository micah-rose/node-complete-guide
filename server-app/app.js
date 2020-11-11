const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const errorController = require("./controllers/error");
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById('5fa8a559640b542d07458fca')
      .then(user => {
          req.user = user;
          next();
      })
      .catch(err => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect(
  'mongodb+srv://user1:mongo@cluster1.orslq.mongodb.net/node_complete_guide?retryWrites=true&w=majority'
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user){
        const user = new User({
          name: 'Max',
          email: 'max@test.com',
          cart: {
            items: []
          }
        })
        user.save();
      }
    })
    app.listen(3002);
  })
  .catch(err => {
    console.log(err);
  });
