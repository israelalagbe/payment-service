import { PaymentMethod } from '../enums/payment.enum';

export interface PaymentInitializationParams {
  amount: number;
  currency: string;
  reference: string;
}

export abstract class PaymentProvider {
  abstract paymentMethod: PaymentMethod;
  abstract initializePayment(params: PaymentInitializationParams): Promise<void>;

  private static providers: PaymentProvider[] = [];

  static registerProvider(provider: PaymentProvider): void {
    PaymentProvider.providers.push(provider);
  }

  static getProvider(paymentMethod: PaymentMethod): PaymentProvider {
    const provider = PaymentProvider.providers.find(p => p.paymentMethod === paymentMethod);
    if (!provider) {
      throw new Error(`Payment method ${paymentMethod} not supported`);
    }
    return provider;
  }
}
