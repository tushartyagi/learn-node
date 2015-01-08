var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://0.0.0.0:27017/learn-node", function(err, db) {
    if (!err) {
        console.log("Connected..")
    }
    
    db.collection('person', function(err, data) {});
})