// create.controller.ts

import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { CustomerService } from 'src/services/customer.service';
import { CreateCustomerDto } from 'src/dtos/customer/create.dto';

@Controller('customer')
export class CreateController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<{ statusCode: HttpStatus; message: string; error?: string }> {
    const newUser = await this.customerService.create(createCustomerDto);
    return newUser;
  }
}
