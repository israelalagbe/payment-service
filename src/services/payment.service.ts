import { v4 as uuidv4 } from 'uuid';
import { PaymentDetails, PaymentStatus } from '../types';
import { logger } from '../utils/logger';

export class PaymentService {
  private payments: Map<string, PaymentDetails> = new Map();

  async createPayment(details: PaymentDetails): Promise<PaymentDetails> {
    const payment = {
      ...details,
      id: uuidv4(),
      status: PaymentStatus.PENDING,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    await this.simulateProcessing(payment);
    this.payments.set(payment.id, payment);
    logger.info({ payment }, 'Payment created successfully');
    return payment;
  }

  async getPayment(id: string): Promise<PaymentDetails | null> {
    const payment = this.payments.get(id);
    if (!payment) {
      logger.warn({ paymentId: id }, 'Payment not found');
      return null;
    }
    return payment;
  }

  async updatePaymentStatus(id: string, status: PaymentStatus): Promise<PaymentDetails | null> {
    const payment = this.payments.get(id);
    if (!payment) {
      logger.warn({ paymentId: id }, 'Payment not found for status update');
      return null;
    }

    const updatedPayment = {
      ...payment,
      status,
      updatedAt: new Date()
    };

    this.payments.set(id, updatedPayment);
    logger.info({ payment: updatedPayment }, 'Payment status updated');
    return updatedPayment;
  }

  private async simulateProcessing(payment: PaymentDetails): Promise<void> {
    logger.info({ payment }, 'Processing payment');
    await new Promise(resolve => setTimeout(resolve, 1000));
    payment.status = Math.random() > 0.1 ? PaymentStatus.COMPLETED : PaymentStatus.FAILED;
  }
}
