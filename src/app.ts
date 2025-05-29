import 'reflect-metadata';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { PaymentController } from './controllers/payment.service';
import { logger } from './utils/logger';

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

useExpressServer(app, {
  cors: true,
  controllers: [PaymentController],
  routePrefix: '/',
  defaults: {
    nullResultCode: 404,
    undefinedResultCode: 204,
  },
  classTransformer: true,
  validation: true,
});

app.listen(port, () => {
  logger.info(`Server listening at http://localhost:${port}`);
});
