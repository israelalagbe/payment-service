import { Service, Inject } from 'typedi';
import { Payment } from '../models/payment.model';
import { IPaymentRepository } from '../repositories/payment.repository';
import { PaymentStatus } from '../enums/payment.enum';
import { CreatePaymentDto } from '../dtos/payment.dto';

@Service()
export class PaymentService {
  constructor(
    @Inject('PaymentRepository') private readonly paymentRepository: IPaymentRepository
  ) {}

  async createPayment(payment: CreatePaymentDto): Promise<Payment> {
    const transaction = await this.paymentRepository.create({
      ...payment,
      reference: this.generateReference(),
    });
    
    return transaction;
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
