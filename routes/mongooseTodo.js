const router = require('express').Router();
const MongooseController = require('../controllers/MongooseController.js');


/**
 * @swagger
 * /api/mongoose-todo/get:
 *   get:
 *     summary: Get todo list with mongoose
 *     tags: [Mongoose]
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/get', MongooseController.getTodos);


/**
 * @swagger
 * /api/mongoose-todo/get-by-id/{id}:
 *   get:
 *     summary: Get mongoDB todo by id
 *     tags: [Mongoose]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/get-by-id/:id', MongooseController.getTodoById);


/**
 * @swagger
 * /api/mongoose-todo/create:
 *   post:
 *     summary: Add todo
 *     tags: [Mongoose]
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
 *                 default: false
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.post('/create', MongooseController.addTodo);


/**
 * @swagger
 * /api/mongoose-todo/update/{id}:
 *   put:
 *     summary: Update Todo
 *     tags: [Mongoose]
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

router.put('/update/:id', MongooseController.editTodo);

// 653d2ece70899418233e6c17
/**
 * @swagger
 * /api/mongoose-todo/edit/{id}:
 *   patch:
 *     summary: Update Todo
 *     tags: [Mongoose]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *     responses:
 *       '200':
 *         description: Seccess
 */
router.patch('/edit/:id', MongooseController.editCompleted);


/**
 * @swagger
 * /api/mongoose-todo/delete/{id}:
 *   delete:
 *     summary: Delete Todo by id
 *     tags: [Mongoose]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.delete('/delete/:id', MongooseController.deleteTodo);


module.exports = router;