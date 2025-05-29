import { IsString, IsNumber, IsEnum, IsNotEmpty, Min, Length } from 'class-validator';
import { PaymentMethod, PaymentStatus, Currency } from '../enums/payment.enum';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreatePaymentDto:
 *       type: object
 *       required:
 *         - amount
 *         - currency
 *         - paymentMethod
 *       properties:
 *         amount:
 *           type: number
 *           format: float
 *           minimum: 0.01
 *           description: The payment amount
 *         currency:
 *           type: string
 *           enum: [USD, EUR, GBP]
 *           description: The currency code (e.g., USD)
 *         paymentMethod:
 *           type: string
 *           enum: [CARD, BANK_TRANSFER, PAYPAL]
 *           description: The payment method
 *         description:
 *           type: string
 *           description: A description of the payment
 */
export class CreatePaymentDto {
  @IsNumber()
  @Min(0.01)
  amount!: number;

  @IsEnum(Currency)
  @Length(3, 3)
  currency!: Currency;

  @IsEnum(PaymentMethod)
  @IsNotEmpty()
  paymentMethod!: PaymentMethod;

  @IsString()
  description?: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdatePaymentStatusDto:
 *       type: object
 *       required:
 *         - status
 *       properties:
 *         status:
 *           type: string
 *           enum: [PENDING, COMPLETED, FAILED]
 *           description: The new payment status
 */
export class UpdatePaymentStatusDto {
  @IsEnum(PaymentStatus)
  @IsNotEmpty()
  status!: PaymentStatus;
}
