import request from 'supertest';
import app from '../app';
import { PaymentStatus, PaymentMethod } from '../enums/payment.enum';

describe('Payment API Integration Tests', () => {
  const mockPaymentData = {
    amount: 100.00,
    currency: 'USD',
    paymentMethod: PaymentMethod.CARD,
    description: 'Test payment'
  };

  describe('POST /api/payments', () => {
    it('should create a new payment', async () => {
      
      const response = await request(app)
        .post('/api/payments')
        .send(mockPaymentData)
        .expect(201);

      expect(response.body).toMatchObject({
        amount: mockPaymentData.amount,
        currency: mockPaymentData.currency,
        status: PaymentStatus.PENDING
      });
      expect(response.body.id).toBeDefined();
      expect(response.body.reference).toMatch(/^PAY-\d+-[a-z0-9]+$/);
    });

    it('should validate payment input', async () => {
      const invalidData = { ...mockPaymentData, amount: -100 };
      const response = await request(app)
        .post('/api/payments')
        .send(invalidData)
        .expect(400);

      expect(response.body.error).toBeDefined();
    });
  });

  describe('GET /api/payments/:id', () => {
    let paymentId: string;

    beforeEach(async () => {
      const response = await request(app)
        .post('/api/payments')
        .send(mockPaymentData);
      paymentId = response.body.id;
    });

    it('should return payment by id', async () => {
      const response = await request(app)
        .get(`/api/payments/${paymentId}`)
        .expect(200);

      expect(response.body.id).toBe(paymentId);
    });

    it('should return 404 for non-existent payment', async () => {
      await request(app)
        .get('/api/payments/non-existent-id')
        .expect(404);
    });
  });

  describe('PATCH /api/payments/:id/status', () => {
    let paymentId: string;

    beforeEach(async () => {
      const response = await request(app)
        .post('/api/payments')
        .send(mockPaymentData);
      paymentId = response.body.id;
    });

    it('should update payment status', async () => {
      const response = await request(app)
        .patch(`/api/payments/${paymentId}/status`)
        .send({ status: PaymentStatus.COMPLETED })
        .expect(200);

      expect(response.body.status).toBe(PaymentStatus.COMPLETED);
    });

    it('should validate status update', async () => {
      await request(app)
        .patch(`/api/payments/${paymentId}/status`)
        .send({ status: 'INVALID_STATUS' })
        .expect(400);
    });
  }); 
});
