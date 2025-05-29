import { PaymentMethod } from '../enums/payment.enum';
import { logger } from '../utils/logger';
import { PaymentProvider, PaymentInitializationParams } from './payment.provider';

export class BankTransferProvider extends PaymentProvider {
  paymentMethod = PaymentMethod.BANK_TRANSFER;

  async initializePayment(params: PaymentInitializationParams): Promise<void> {
    logger.info(`Processing bank transfer payment of ${params.amount} ${params.currency} with reference ${params.reference}`);
    return Promise.resolve(); // Simulate successful payment
  }
}
