import { PaymentMethod } from '../enums/payment.enum';
import { logger } from '../utils/logger';
import { PaymentProvider, PaymentInitializationParams } from './payment.provider';


export class CardProvider extends PaymentProvider {
  paymentMethod = PaymentMethod.CARD;

  async initializePayment(params: PaymentInitializationParams): Promise<void> {
    logger.info(`Processing card payment of ${params.amount} ${params.currency} with reference ${params.reference}`);
    return Promise.resolve(); // Simulate successful payment
  }
}
