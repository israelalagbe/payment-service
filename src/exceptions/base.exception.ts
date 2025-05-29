import { HttpError } from 'routing-controllers';

export class BaseException extends HttpError {
  constructor(status: number, message: string) {
    super(status, message);
  }
}
