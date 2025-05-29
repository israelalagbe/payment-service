import swaggerJsdoc from 'swagger-jsdoc';

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
      },
    ],
  },
  apis: ['./src/controllers/*.ts', './src/dtos/*.ts'],
};

const specs = swaggerJsdoc(options);

export { specs };
