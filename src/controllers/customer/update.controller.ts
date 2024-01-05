// create.controller.ts

import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Patch,
  Param,
} from '@nestjs/common';
import { CustomerService } from 'src/services/customer.service';
import { UpdateCustomerDto } from 'src/dtos/customer/update.dto';

@Controller('customer')
export class UpdateController {
  constructor(private readonly customerService: CustomerService) {}

  @Patch(':id') // Use ':id' to capture the parameter from the URL
  async update(
    @Param('id') customerId: number, // Capture the 'id' parameter from the URL
    @Body() updateCustomerDto: UpdateCustomerDto, // Assuming CreateCustomerDto contains fields to update
  ): Promise<{ statusCode: HttpStatus; message: string; error?: string }> {
    const updatedUser = await this.customerService.update(
      customerId,
      updateCustomerDto,
    );
    return updatedUser;
  }
}
