import 'reflect-metadata';
import { Container } from 'typedi';
import { PaymentRepository } from '../repositories/payment.repository';

beforeAll(async () => {
  Container.set('PaymentRepository', new PaymentRepository());
});

afterAll(() => {
  Container.reset();
});
