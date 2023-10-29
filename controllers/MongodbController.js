const MongodbService = require('../services/MongodbService.js');

class MongodbController {

    async getTodos(req, res) {
        try {
            const todos = await MongodbService.getTodos();
            res.send(todos);
        } catch (error) {
            res.json(error);
        };
    };

    async getTodoById(req, res) {
        try {
            const { id } = req.params;
            const todo = await MongodbService.getTodoById(id);
            res.send(todo);
        } catch (error) {
            res.json(error);
        };
    };

    async addTodo(req, res) {
        try {
            const { body } = req;
            const addedTodo = await MongodbService.addTodo(body);
            res.send(addedTodo);
        } catch (error) {
            res.json(error);
        };
    };

    async editTodo(req, res) {
        try {
            const { title } = req.body;
            const editedTodo = await MongodbService.editTodo(title);
            res.send(editedTodo);
        } catch (error) {
            res.json(error);
        };
    };

    async deleteTodo(req, res) {
        try {
            const { id } = req.params;
            const deletedResult = await MongodbService.deleteTodo(id);
            res.send(deletedResult);
        } catch (error) {
            res.json(error);
        };
    };

};

module.exports = new MongodbController();