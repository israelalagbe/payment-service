import { processPayment } from '../src/payment.service';

describe('processPayment', () => {
  it('should succeed with valid amount', () => {
    const paymentDetails = { amount: 100, currency: 'USD', paymentMethod: 'credit_card' };
    const result = processPayment(paymentDetails);
    expect(result).toEqual({ success: true });
  });

  it('should fail with invalid amount', () => {
    const paymentDetails = { amount: 0, currency: 'USD', paymentMethod: 'credit_card' };
    expect(() => processPayment(paymentDetails)).toThrowError('Invalid payment amount');
  });
});
