// src/dtos/users/create.dto.ts

import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsInt,
  IsOptional,
} from 'class-validator';

export class UpdateCustomerDto {
  @IsNotEmpty()
  @IsString()
  customer_code: string;

  @IsOptional()
  @IsString()
  customer_pin: string;

  @IsOptional()
  @IsString()
  customer_name: string;

  @IsOptional()
  @IsString()
  customer_name_en: string;

  @IsNotEmpty()
  @IsString()
  customer_bank_holder_name: string;

  @IsNotEmpty()
  @IsString()
  customer_name_en_scb: string;

  @IsNotEmpty()
  @IsString()
  customer_img: string;

  @IsOptional()
  @IsString()
  bank_id: string;

  @IsOptional()
  @IsString()
  bank_no: string;

  @IsNotEmpty()
  @IsString()
  truewallet_id: string;

  @IsNotEmpty()
  @IsString()
  line_id: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  idcard: string;

  @IsOptional()
  @IsString()
  backidcard: string;

  @IsNotEmpty()
  @IsString()
  birthday: string;

  @IsNotEmpty()
  @IsString()
  remark: string;

  @IsNotEmpty()
  status: number;

  @IsNotEmpty()
  @IsInt()
  verify_identity: number;

  @IsOptional()
  @IsString()
  verify_bank: number;

  @IsNotEmpty()
  @IsString()
  device_token: string;

  @IsNotEmpty()
  @IsString()
  user_token: string;

  @IsNotEmpty()
  @IsString()
  agent_id: string;

  @IsNotEmpty()
  @IsString()
  nopromation: string;

  @IsNotEmpty()
  @IsString()
  languages: string;

  @IsNotEmpty()
  @IsString()
  register_type: string;

  @IsNotEmpty()
  @IsString()
  scb_premium: string;

  @IsNotEmpty()
  @IsString()
  qr_status: string;

  @IsNotEmpty()
  @IsString()
  referer: string;

  @IsNotEmpty()
  @IsInt()
  referer_status: number;

  @IsNotEmpty()
  @IsString()
  mylink: string;

  @IsNotEmpty()
  @IsInt()
  welcome: number;

  @IsNotEmpty()
  @IsInt()
  wrong_bank: number;

  @IsNotEmpty()
  @IsString()
  lastupdate: Date;

  @IsNotEmpty()
  @IsString()
  createdate: Date;

  @IsNotEmpty()
  @IsString()
  isBankVerified: string;

  // Add other properties as needed for creating a user
}
