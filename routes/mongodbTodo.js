const router = require('express').Router();
const MongodbController = require('../controllers/MongodbController.js');


/**
 * @swagger
 * /api/mongodb-todo/get:
 *   get:
 *     summary: Get mongoDB todos
 *     tags: [MongoDB]
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/get', MongodbController.getTodos);


/**
 * @swagger
 * /api/mongodb-todo/get-by-id/{id}:
 *   get:
 *     summary: Get mongoDB todo by id
 *     tags: [MongoDB]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         required: true
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/get-by-id/:id', MongodbController.getTodoById);


/**
 * @swagger
 * /api/mongodb-todo/create:
 *   post:
 *     summary: Add todo
 *     tags: [MongoDB]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               isCompleted:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.post('/create', MongodbController.addTodo);


/**
 * @swagger
 * /api/mongodb-todo/update/{id}:
 *   put:
 *     summary: Update Todo
 *     tags: [MongoDB]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content:   
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.put('/update/:id', MongodbController.editTodo);


/**
 * @swagger
 * /api/mongodb-todo/delete/{id}:
 *   delete:
 *     summary: Delete Todo by id
 *     tags: [MongoDB]
 *     properties:
 *       - in: path
 *         name: id
 *         type: integer
 *         required: true
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.delete('/delete/:id', MongodbController.deleteTodo);


module.exports = router;