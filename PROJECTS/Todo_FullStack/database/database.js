const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

let _db;

// Database Name
const dbName = 'todoApp';

function main() {
        return client.connect()
            .then(() => {
                _db = client.db(dbName);
            })
            .catch((err)=>{
                reject(err);
            })
}

function getDB(){
    if(_db) return _db;
    return null;
}

// use promise or normal function instead of this also

module.exports.mongoConnect = main;
module.exports.getDB = getDB;
