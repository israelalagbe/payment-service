import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';
import { Service } from 'typedi';
import { Request, Response } from 'express';
import { logger } from '../utils/logger';

@Service()
@Middleware({ type: 'after' })
export class GlobalErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: any, request: Request, response: Response, next: (err?: any) => any) {
    const status = error.httpCode || error.status || 500;
 
    response.status(status).json( {
      code: status,
      errorType: error.name || 'InternalServerError',
      error: error.message || 'Internal Server Error',
      errors: error.errors || [],
      timestamp: new Date().toISOString(),
      path: request.originalUrl,
      method: request.method
    });

    logger.error({
      error,
      path: request.originalUrl,
      method: request.method
    });
  }
}
