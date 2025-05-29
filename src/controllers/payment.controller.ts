import { JsonController, Post, Get, Param, Body, Patch, HttpCode } from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";
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

  /**
   * @swagger
   * /payments:
   *   post:
   *     summary: Create a new payment
   *     description: Creates a new payment with the provided details
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreatePaymentDto'
   *     responses:
   *       201:
   *         description: Payment created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Payment'
   */
  @Post()
  @HttpCode(201)
  @OpenAPI({
    summary: "Create a new payment",
    description: "Creates a new payment with the provided details",
  })
  @ResponseSchema(Payment, { statusCode: 201, description: "Payment created" })
  async createPayment(@Body() payment: CreatePaymentDto): Promise<Payment> {
    return await this.paymentService.createPayment(payment);
  }

  /**
   * @swagger
   * /payments/{id}:
   *   get:
   *     summary: Get payment by ID
   *     description: Returns a payment by its ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: Payment ID
   *     responses:
   *       200:
   *         description: Payment details
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Payment'
   *       404:
   *         description: Payment not found
   */
  @Get("/:id")
  @OpenAPI({
    summary: "Get payment by ID",
    description: "Returns a payment by its ID",
  })
  @ResponseSchema(Payment, { description: "Payment details" })
  async getPayment(@Param("id") id: string): Promise<Payment> {
    const payment = await this.paymentService.getPayment(id);
    if (!payment) {
      throw new NotFoundException("Payment");
    }
    return payment;
  }

  /**
   * @swagger
   * /payments/{id}/status:
   *   patch:
   *     summary: Update payment status
   *     description: Updates the status of a payment by its ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: Payment ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdatePaymentStatusDto'
   *     responses:
   *       200:
   *         description: Payment status updated
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Payment'
   *       404:
   *         description: Payment not found
   */
  @Patch("/:id/status")
  @OpenAPI({
    summary: "Update payment status",
    description: "Updates the status of a payment by its ID",
  })
  @ResponseSchema(Payment, { description: "Payment status updated" })
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
