require('dotenv').config();
const express = require('express');
const app = express();
const { db } = require('./config/db.js');
db();

app.use(express.json());


const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./generate-doc.js');



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


const routes = require('./routes/index.js');
app.use('/api', routes);


app.listen(process.env.PORT || 3000 , () => console.log('Server is started...'));

module.exports = app;