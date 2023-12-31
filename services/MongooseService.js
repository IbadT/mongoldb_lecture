const Todo = require('../models/mongooseModel.js');


class MongooseService {

    async getTodos() {
        return new Promise((res, rej) => {
            Todo.find({}).then(data => res(data));
        });
    };
    
    async getTodoById(_id) {
        return new Promise((res, rej) => {
            Todo.find({ _id }).then(data => res(data));
        });
    };
    
    async addTodo(data) {
        return new Promise((res, rej) => {
            const addedTodo = new Todo(data);
            addedTodo.save();
            res(addedTodo);
        });
    };
    
    async editTodo(_id, title) {
        return new Promise((res, rej) => {
            Todo.findByIdAndUpdate(_id, { title }, { new: true }).then(data => res(data));
        });
    };
    
    async deleteTodo(_id) {
        return new Promise((res, rej) => {
            Todo.findByIdAndDelete(_id).then(data => res(data));
        });
    };

};


module.exports = new MongooseService();