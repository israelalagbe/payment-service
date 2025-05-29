import swaggerJsdoc from 'swagger-jsdoc';
import * as path from 'path';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Payment Service API',
      version: '1.0.0',
      description: 'REST API for Payment Service',
    },
    servers: [
      {
        url: '/api',
        description: 'Base URL for the API',
      },
    ],
    components: {
      schemas: {},
    },
  },
  apis: [path.join(__dirname, '../controllers/*.ts'), path.join(__dirname, '../dtos/*.ts'), path.join(__dirname, '../swagger/*.ts')],
};

const specs = swaggerJsdoc(options);

export { specs };
