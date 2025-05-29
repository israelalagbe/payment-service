import { JsonController, Post, Get, Param, Body, Patch, HttpCode } from "routing-controllers";
import { PaymentService } from "../services/payment.service";
import { logger } from "../utils/logger";
import { NotFoundException } from "../exceptions/not-found.exception";
import { BadRequestException } from "../exceptions/bad-request.exception";
import { Service } from "typedi";
import { CreatePaymentDto, UpdatePaymentStatusDto } from "../dtos/payment.dto";
import { Payment } from "../models/payment.model";

@Service()
@JsonController("/payments")
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @HttpCode(201)
  async createPayment(@Body() payment: CreatePaymentDto): Promise<Payment> {
    return await this.paymentService.createPayment(payment);
  }

  @Get("/:id")
  async getPayment(@Param("id") id: string): Promise<Payment> {
    const payment = await this.paymentService.getPayment(id);
    if (!payment) {
      throw new NotFoundException("Payment");
    }
    return payment;
  }

  @Patch("/:id/status")
  async updatePaymentStatus(
    @Param("id") id: string,
    @Body() updateStatusDto: UpdatePaymentStatusDto
  ): Promise<Payment> {
    const payment = await this.paymentService.updatePaymentStatus(id, updateStatusDto.status);
    if (!payment) {
      throw new NotFoundException("Payment");
    }
    return payment;
  }
}
