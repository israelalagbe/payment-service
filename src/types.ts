export enum PaymentStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED'
}

export interface PaymentDetails {
  id?: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  status?: PaymentStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PaymentResponse {
  success: boolean;
  data?: PaymentDetails;
  error?: string;
}
