import { BaseException } from './base.exception';

export class BadRequestException extends BaseException {
  constructor(message: string = 'Invalid request') {
    super(400, message);
  }
}
