import { IsNotEmpty, IsString } from 'class-validator';

export class UserVerificationBodyDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  verification_token: string;

  @IsNotEmpty()
  otp: string;

  @IsNotEmpty()
  @IsString()
  verification_type: string;
}