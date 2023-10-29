const { ObjectId } = require('mongodb');
const { getMongodbConnection, useDefaultDb } = require('../config/db.js');



class MongodbService {

    async getTodos() {
        return new Promise(async (res, rej) => {
            const client = await getMongodbConnection();
            const db = await useDefaultDb(client);
            const todos = await db.collection('mongodb').find({}).toArray();
            client.close();
            res(todos);
        });
    };

    async getTodoById(id) {
        return new Promise(async (res, rej) => {
            const client = await getMongodbConnection();
            const db = await useDefaultDb(client);
            const todos = await db.collection('mongodb').findOne({ _id: new ObjectId(id) });
            client.close();
            res(todos);
        });
    };

    async addTodo(body) {
        return new Promise(async (res, rej) => {
            const client = await getMongodbConnection();
            const db = await useDefaultDb(client);
            await db.collection('mongodb').insertOne(body);

            // const todos = await db.collection('mongodb').insertOne(body);
            // {
            //     "acknowledged": true,
            //     "insertedId": "653d3c71c2c87f98f9b4077e"
            // }
            // res(todos);

            client.close();
            res(body);
        });
    };

    async editTodo(id, title) {
        return new Promise(async (res, rej) => {
            const client = await getMongodbConnection();
            const db = await useDefaultDb(client);
            console.log(id, title);
            const todos = await db.collection('mongodb').updateOne({_id: new ObjectId(id)}, { $set: { title } });
            client.close();
            res(todos);
        });
    };

    async deleteTodo(id) {
        return new Promise(async (res, rej) => {
            const client = await getMongodbConnection();
            const db = await useDefaultDb(client);
            const todos = await db.collection('mongodb').deleteOne({ _id: new ObjectId(id) });
            client.close();
            res(todos);
        });
    };

};

module.exports = new MongodbService();