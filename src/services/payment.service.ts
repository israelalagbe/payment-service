import { Service, Inject } from 'typedi';
import { PaymentDetails, PaymentStatus } from '../types';
import { IPaymentRepository } from '../repositories/payment.repository';

@Service()
export class PaymentService {
  constructor(
    @Inject('PaymentRepository') private readonly paymentRepository: IPaymentRepository
  ) {}

  async createPayment(payment: PaymentDetails) {
    const transaction = await this.paymentRepository.create({
      ...payment,
      reference: this.generateReference(),
    });
    
    return transaction;
  }

  async getPayment(id: string) {
    return this.paymentRepository.findById(id);
  }

  async updatePaymentStatus(id: string, status: PaymentStatus) {
    return this.paymentRepository.updateStatus(id, status);
  }

  private generateReference(): string {
    return `PAY-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}
