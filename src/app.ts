import 'reflect-metadata';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { PaymentController } from './controllers/payment.controller';
import { logger } from './utils/logger';
import swaggerUi from 'swagger-ui-express';
import { specs } from './utils/swagger';

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

useExpressServer(app, {
  cors: true,
  controllers: [PaymentController],
  routePrefix: '/api',
  defaultErrorHandler: false
});

app.listen(port, () => {
  logger.info(`Server listening at http://localhost:${port}/api`);
  logger.info(`API Documentation available at http://localhost:${port}/api-docs`);
});
