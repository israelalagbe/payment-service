import { JsonController, Post, Get, Param, Body, Patch, HttpCode } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { PaymentService } from "../services/payment.service";
import { logger } from "../utils/logger";
import { NotFoundException } from "../exceptions/not-found.exception";
import { BadRequestException } from "../exceptions/bad-request.exception";
import { Service } from "typedi";
import { CreatePaymentDto, UpdatePaymentStatusDto } from "../dtos/payment.dto";
import { Stats } from "fs";

@Service()
@JsonController("/payments")
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @HttpCode(201)
  @OpenAPI({
    summary: "Create a new payment",
    description: "Creates a new payment with the provided details",
  })
  async createPayment(@Body() payment: CreatePaymentDto) {
    return await this.paymentService.createPayment(payment);
  }

  @Get("/:id")
  @OpenAPI({
    summary: "Get payment by ID",
    description: "Returns a payment by its ID",
  })
  async getPayment(@Param("id") id: string) {
    const payment = await this.paymentService.getPayment(id);
    if (!payment) {
      throw new NotFoundException("Payment");
    }
    return payment;
  }

  @Patch("/:id/status")
  @OpenAPI({
    summary: "Update payment status",
    description: "Updates the status of a payment by its ID",
  })
  async updatePaymentStatus(
    @Param("id") id: string,
    @Body() updateStatusDto: UpdatePaymentStatusDto
  ) {
    const payment = await this.paymentService.updatePaymentStatus(id, updateStatusDto.status);
    if (!payment) {
      throw new NotFoundException("Payment");
    }
    return payment;
  }
}
