import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PaginateDto } from 'src/dtos/customer/paginate.dto';
import { UseResources } from 'src/interceptors/use-resources.interceptor';
import { ApiResource } from 'src/resources/api.resource';
import { CustomersResource } from 'src/resources/customer/customers.resource';
import { CustomerService } from 'src/services/customer.service';

@Controller({ path: 'customer' })
export class PaginateController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  @UseResources(CustomersResource)
  async paginate(@Query() dto: PaginateDto) {
    console.log(dto)
    const user = await this.customerService.paginate(dto);

    return ApiResource.successResponse(user)
  }
}
