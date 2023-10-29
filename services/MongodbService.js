const { ObjectId } = require('mongodb');
const { getMongodbConnection, useDefaultDb } = require('../config/db.js');



class MongodbService {

    async getTodos() {
        return new Promise(async (res, rej) => {

        });
    };

    async getTodoById(id) {
        return new Promise(async (res, rej) => {

        });
    };

    async addTodo(body) {
        return new Promise(async (res, rej) => {

        });
    };

    async editTodo(id, title) {
        return new Promise(async (res, rej) => {

        });
    };

    async deleteTodo(id) {
        return new Promise(async (res, rej) => {

        });
    };

};

module.exports = new MongodbService();