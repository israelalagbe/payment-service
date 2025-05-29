import { PaymentMethod } from '../enums/payment.enum';
import { logger } from '../utils/logger';
import { PaymentInitializationParams } from './payment.provider';

export class PaypalProvider {
  paymentMethod = PaymentMethod.PAYPAL;

  async initializePayment(params: PaymentInitializationParams): Promise<void> {
    logger.info(`Processing PayPal payment of ${params.amount} ${params.currency} with reference ${params.reference}`);
    return Promise.resolve(); // Simulate successful payment
  }
}
