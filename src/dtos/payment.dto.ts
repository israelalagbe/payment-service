import { IsString, IsNumber, IsEnum, IsNotEmpty, Min, Length } from 'class-validator';
import { PaymentMethod } from '../enums/payment.enum';
import { PaymentStatus } from '../types';


export class CreatePaymentDto {
  @IsNumber()
  @Min(0.01)
  amount!: number;

  @IsString()
  @Length(3, 3)
  currency!: string;

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
