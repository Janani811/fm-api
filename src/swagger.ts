import swaggerJSDoc from 'swagger-jsdoc';

// Define the Swagger options
const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'REST API for Swagger Documentation',
      version: '1.0.0',
      description:
        'This API provides various routes for user authentication, registration, and more.'
    },
    servers: [
      {
        url: 'http://localhost:9000' // Set your base URL here
      }
    ]
  },
  apis: ['./src/routes/**/*.ts']
};

// Generate the swagger specification using swagger-jsdoc
export const swaggerSpec = swaggerJSDoc(options);
