import 'reflect-metadata';
import express from 'express';
import { useExpressServer, useContainer } from 'routing-controllers';
import { PaymentController } from './controllers/payment.controller';
import { GlobalErrorHandler } from './middlewares/error.middleware';
import { Container } from './config/container';

import swaggerUi from 'swagger-ui-express';
import { specs } from './utils/swagger';

// Set up TypeDI container
useContainer(Container);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
useExpressServer(app, {
  cors: true,
  controllers: [PaymentController],
  routePrefix: '/api',
  middlewares: [GlobalErrorHandler],
  defaultErrorHandler: false
});

export default app;