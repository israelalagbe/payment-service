import { v4 as uuidv4 } from 'uuid';
import { PaymentStatus } from '../types';

interface PaymentConstructorParams {
  reference: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  description?: string;
  metadata?: Record<string, any>;
}

export class Payment {
  id: string;
  reference: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  status: PaymentStatus;
  description?: string;
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;

  constructor(params: PaymentConstructorParams) {
    const { reference, amount, currency, paymentMethod, description, metadata } = params;
    this.id = uuidv4();
    this.reference = reference;
    this.amount = amount;
    this.currency = currency;
    this.paymentMethod = paymentMethod;
    this.description = description;
    this.metadata = metadata;
    this.status = PaymentStatus.PENDING;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
