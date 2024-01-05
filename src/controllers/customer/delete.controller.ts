// delete.controller.ts

import { Controller, Delete, Param, HttpStatus } from '@nestjs/common';
import { CustomerEntity } from 'src/entities/customer.entity';
import { ApiResource } from 'src/resources/api.resource';
import { CustomerService } from 'src/services/customer.service';

@Controller('customer')
export class DeleteUserController {
  constructor(private readonly customerService: CustomerService) {}

  @Delete(':id') // การประกาศตัวแปร แทนค่าใส่อะไรก็ได้ สื่อให้เข้าใจ
  async delete(
    @Param('id') customer_id: number,
  ): Promise<
    { statusCode: HttpStatus; message: string; error?: string } | CustomerEntity
  > {
    const deletedUser = await this.customerService.delete(customer_id);
    return {
      statusCode: 200,
      message: 'delete customer successfully',
    };
  }
}
