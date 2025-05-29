import 'reflect-metadata';
import { Container } from 'typedi';
import { PaymentRepository } from '../repositories/payment.repository';

beforeAll(() => {
  process.env.PORT = '4001'; // Use different port for tests
});

afterAll(() => {
  Container.reset();
});
