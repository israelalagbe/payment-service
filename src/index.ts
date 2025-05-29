import app from "./app";
import { logger } from './utils/logger';

const port = process.env.PORT || 4000;

app.listen(port, () => {
  logger.info(`Server listening at http://localhost:${port}/api`);
  logger.info(`API Documentation available at http://localhost:${port}/api-docs`);
});
