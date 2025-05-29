import { IsString, IsNumber, IsEnum, IsNotEmpty, Min, Length } from 'class-validator';
import { PaymentMethod, PaymentStatus, Currency } from '../enums/payment.enum';

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

export class UpdatePaymentStatusDto {
  @IsEnum(PaymentStatus)
  @IsNotEmpty()
  status!: PaymentStatus;
}
