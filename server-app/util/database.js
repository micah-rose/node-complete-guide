const mongoDB = require('mongodb');
const MongoClient = mongoDB.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://user1:mongo@cluster1.orslq.mongodb.net/node_complete_guide?retryWrites=true&w=majority'
        )
        .then(result => {
            console.log('Connected');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;