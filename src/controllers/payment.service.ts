import { JsonController, Post, Body, HttpCode, HttpError, Get } from 'routing-controllers';
import { PaymentDetails } from '../types';

@JsonController()
export class PaymentController {
  @Get('/')
  @HttpCode(200)
  getHello() {
    return { message: 'Hello Wore!' };
  }

  @Post('/process-payment')
  @HttpCode(200)
  processPayment(@Body() paymentDetails: PaymentDetails) {
    if (paymentDetails.amount <= 0) {
      throw new HttpError(400, 'Invalid payment amount');
    }
    return { success: true };
  }
}
