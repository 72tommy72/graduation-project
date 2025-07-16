// docs/index.js
import swaggerJSDoc from 'swagger-jsdoc';
import authDocs from './user.docs.js'; 
import imageAnDocs from './imageAn.docs.js';
import userChangesDocs from './userChanges.docs.js';
import userInfoDocs from './userInfo.docs.js';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'E-Commerce API',
            version: '1.0.0',
            description: 'API documentation for E-Commerce app',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [{ bearerAuth: [] }],
        paths: {
            ...authDocs, 
            ...imageAnDocs,
            ...userChangesDocs,
            ...userInfoDocs,
        },
    },
    apis: [],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
