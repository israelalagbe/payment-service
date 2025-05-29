import { Service } from 'typedi';
import { Payment } from '../models/payment.model';
import { PaymentStatus } from '../types';

export interface IPaymentRepository {
  create(payment: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>): Promise<Payment>;
  findById(id: string): Promise<Payment | undefined>;
  updateStatus(id: string, status: PaymentStatus): Promise<Payment | undefined>;
}

@Service()
export class PaymentRepository implements IPaymentRepository {
  private payments: Payment[] = [];

  async create(payment: Omit<Payment, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<Payment> {
    const newPayment = new Payment({
      reference: payment.reference,
      amount: payment.amount,
      currency: payment.currency,
      paymentMethod: payment.paymentMethod,
      description: payment.description,
      metadata: payment.metadata
    });

    this.payments.push(newPayment);
    return newPayment;
  }

  async findById(id: string): Promise<Payment | undefined> {
    return this.payments.find(p => p.id === id);
  }

  async updateStatus(id: string, status: PaymentStatus): Promise<Payment | undefined> {
    const payment = await this.findById(id);
    if (payment) {
      payment.status = status;
      payment.updatedAt = new Date();
    }
    return payment;
  }
}
