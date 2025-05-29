import swaggerJsdoc from 'swagger-jsdoc';
import { getMetadataArgsStorage } from 'routing-controllers';
import { routingControllersToSpec } from 'routing-controllers-openapi';

const storage = getMetadataArgsStorage();
const spec = routingControllersToSpec(storage, {
  controllers: [__dirname + '/../controllers/*.ts'],
}, {
  info: {
    title: 'Payment Service API',
    version: '1.0.0',
    description: 'API documentation for the Payment Service',
  },
});

export const specs = spec;
