import { JsonController, Post, Get, Put, Param, Body } from 'routing-controllers';
import { PaymentService } from '../services/payment.service';
import { PaymentDetails, PaymentStatus } from '../types';
import { logger } from '../utils/logger';
import { NotFoundException } from '../exceptions/not-found.exception';
import { BadRequestException } from '../exceptions/bad-request.exception';
import { Service } from 'typedi';

@Service()
@JsonController('/payments')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService
  ) {}

  @Post()
  async createPayment(@Body() payment: PaymentDetails) {
    try {
      return await this.paymentService.createPayment(payment);
    } catch (error) {
      logger.error({ error }, 'Failed to create payment');
      throw new BadRequestException('Failed to create payment');
    }
  }

  @Get('/:id')
  async getPayment(@Param('id') id: string) {
    const payment = await this.paymentService.getPayment(id);
    if (!payment) {
      throw new NotFoundException('Payment');
    }
    return payment;
  }

  @Put('/:id/status')
  async updatePaymentStatus(@Param('id') id: string, @Body() { status }: { status: PaymentStatus }) {
    const payment = await this.paymentService.updatePaymentStatus(id, status);
    if (!payment) {
      throw new NotFoundException('Payment');
    }
    return payment;
  }
}
