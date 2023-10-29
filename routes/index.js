const router = require('express').Router();

const mongodbTodo = require('./mongodbTodo.js');
router.use('/mongodb-todo', mongodbTodo);

const mongooseTodo = require('./mongooseTodo.js');
router.use('/mongoose-todo', mongooseTodo);


module.exports = router;