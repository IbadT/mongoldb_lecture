require('dotenv').config();
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.URL1);
const mongoose = require('mongoose');


async function getMongodbConnection() {
    return MongoClient.connect(process.env.URL1).then(client);
};

async function useDefaultDb(client) {
    const db = await client.db('Todo_list');
    return db;
};


// mongoose

const db = async () => {
    mongoose.connect(process.env.URL2)
    .then(() => console.log('Mongoose db is connected...'))
    .catch(err => console.log(err));
};


module.exports = {
    getMongodbConnection,
    useDefaultDb,
    db
};