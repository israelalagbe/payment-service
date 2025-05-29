import { Service, Inject } from 'typedi';
import { Payment } from '../models/payment.model';
import { IPaymentRepository } from '../repositories/payment.repository';
import { PaymentStatus, PaymentMethod, Currency } from '../enums/payment.enum';
import { CreatePaymentDto } from '../dtos/payment.dto';
import { CardProvider } from '../providers/card.provider';
import { BankTransferProvider } from '../providers/bank-transfer.provider';
import { PaypalProvider } from '../providers/paypal.provider';
import { v4 as uuidv4 } from 'uuid';
import { PaymentProvider } from '../providers/payment.provider';

@Service()
export class PaymentService {
  constructor(
    @Inject('PaymentRepository') private readonly paymentRepository: IPaymentRepository
  ) {
    PaymentProvider.registerProvider(new CardProvider());
    PaymentProvider.registerProvider(new BankTransferProvider());
    PaymentProvider.registerProvider(new PaypalProvider());
  }

  async createPayment(payment: CreatePaymentDto): Promise<Payment> {
    const { amount, currency, paymentMethod, description } = payment;

    const provider = PaymentProvider.getProvider(paymentMethod);

    const reference = this.generateReference();
    
    await provider.initializePayment({
      amount,
      currency,
      reference,
    });

    const newPayment = await this.paymentRepository.create({
      ...payment,
      reference
    });

    return newPayment;
  }

  async getPayment(id: string): Promise<Payment | undefined> {
    return this.paymentRepository.findById(id);
  }

  async updatePaymentStatus(id: string, status: PaymentStatus): Promise<Payment | undefined> {
    return this.paymentRepository.updateStatus(id, status);
  }

  private generateReference(): string {
    return `PAY-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}
