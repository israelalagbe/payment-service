export interface PaymentDetails {
  amount: number;
  currency: string;
  paymentMethod: string;
  description?: string;
  metadata?: Record<string, any>;
}

export interface PaymentResponse {
  success: boolean;
  data?: PaymentDetails;
  error?: string;
}
