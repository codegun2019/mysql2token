// src/dtos/users/create.dto.ts

import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  // Add other properties as needed for creating a user
}
