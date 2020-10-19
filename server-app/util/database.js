const mongoDB = require('mongodb');
const MongoClient = mongoDB.MongoClient;


const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://user1:mongo@cluster1.orslq.mongodb.net/node_complete_guide?retryWrites=true&w=majority'
        )
        .then(result => {
            console.log('Connected');
            callback(result);
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = mongoConnect;