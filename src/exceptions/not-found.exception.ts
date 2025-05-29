import { BaseException } from './base.exception';

export class NotFoundException extends BaseException {
  constructor(resource: string = 'Resource') {
    super(404, `${resource} not found`);
  }
}
