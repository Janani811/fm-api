import swaggerJSDoc from 'swagger-jsdoc';

// Define the Swagger options
const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'FixMate Api for Swagger Documentation',
      version: '1.0.0',
      description:
        'This API provides various routes for user authentication, registration, and more.'
    },
    basePath: '/',
    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'token',
          in: 'cookie',
          name: 'authcookie'
        }
      }
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
