const { MongoClient } = require('mongodb')
const url = 'mongodb://127.0.0.1:27017';
const databaseName = 'newDb'
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    db = result.db(databaseName);
    // collection = db.collection('users');
    // let data = await collection.find().toArray();
    // console.log(data)
    return db.collection('users');
}

// console.log(dbConnect())

// dbConnect().then((res) => {
//     // console.log(res.find().toArray())

//     res.insertOne({ name: "hijk" }).then((data) => {
//         console.log(data)
//     })

//     res.find().toArray().then((data) => {
//         console.log(data)
//     })

// })

module.exports = dbConnect