const MongooseService = require('../services/MongooseService.js');

class MongooseController {

    async getTodos(req, res) {
        try {
            const todos = await MongooseService.getTodos();
            res.send(todos);
        } catch (error) {
            res.json(error);
        }
    };

    async getTodoById(req, res) {
        try {
            const { id } = req.params;
            const todo = await MongooseService.getTodoById(id);
            res.send(todo);
        } catch (error) {
            res.json(error);
        }
    };

    async addTodo(req, res) {
        try {
            const { body } = req;
            const createdTodo = await MongooseService.addTodo(body);
            res.send(createdTodo);
        } catch (error) {
            res.json(error);
        }
    };

    async editTodo(req, res) {
        try {
            const { id } = req.params;
            const { body } = req;
            const editedTodo = await MongooseService.editTodo(id, body);
            res.send(editedTodo);
        } catch (error) {
            res.json(error);
        }
    };

    async editCompleted(req, res) {
        try {
            const { id } = req.params;
            const newTodo = await MongooseService.editCompleted(id);
            res.send(newTodo);
        } catch (error) {
            res.json(error);
        }
    }

    async deleteTodo(req, res) {
        try {
            const { id } = req.params;
            const deletedResult = await MongooseService.deleteTodo(id);
            res.send(deletedResult);
        } catch (error) {
            res.json(error);
        }
    };



};

module.exports = new MongooseController();