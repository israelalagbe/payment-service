import { PaymentDetails } from './types';

export function processPayment(paymentDetails: PaymentDetails): { success: boolean } {
  // Basic payment processing logic (replace with actual implementation)
  if (paymentDetails.amount > 0) {
    return { success: true };
  } else {
    
    throw new Error('Invalid payment amount');
  }
}
