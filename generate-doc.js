const swaggerJsDoc = require('swagger-jsdoc');


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Documentation for MongoDB Todo list',
            server: ['http://localhost:3000'],
            version: '1.0.0'
        }
    },
    apis: ['./routes/*.js']
}

const swaggerDoc = swaggerJsDoc(options);


module.exports = swaggerDoc;