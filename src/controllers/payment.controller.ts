import { JsonController, Post, Get, Put, Param, Body } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { PaymentService } from '../services/payment.service';
import { PaymentDetails, PaymentStatus } from '../types';
import { logger } from '../utils/logger';
import { NotFoundException } from '../exceptions/not-found.exception';
import { BadRequestException } from '../exceptions/bad-request.exception';
import { Service } from 'typedi';
import { CreatePaymentDto, UpdatePaymentStatusDto } from '../dtos/payment.dto';

@Service()
@JsonController('/payments')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService
  ) {}

  @Post()
  @OpenAPI({
    summary: 'Create a new payment',
    description: 'Creates a new payment with the provided details'
  })
  async createPayment(@Body() payment: CreatePaymentDto) {
    try {
      return await this.paymentService.createPayment(payment);
    } catch (error) {
      logger.error({ error }, 'Failed to create payment');
      throw new BadRequestException((error as Error).message || 'Failed to create payment');
    }
  }

  @Get('/:id')
  @OpenAPI({
    summary: 'Get payment by ID',
    description: 'Returns a payment by its ID'
  })
  async getPayment(@Param('id') id: string) {
    const payment = await this.paymentService.getPayment(id);
    if (!payment) {
      throw new NotFoundException('Payment');
    }
    return payment;
  }

  @Put('/:id/status')
  @OpenAPI({
    summary: 'Update payment status',
    description: 'Updates the status of a payment by its ID'
  })
  async updatePaymentStatus(
    @Param('id') id: string, 
    @Body() updateStatusDto: UpdatePaymentStatusDto
  ) {
    const payment = await this.paymentService.updatePaymentStatus(id, updateStatusDto.status);
    if (!payment) {
      throw new NotFoundException('Payment');
    }
    return payment;
  }
}
