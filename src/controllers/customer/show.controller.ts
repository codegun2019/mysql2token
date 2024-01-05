import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UseResources } from 'src/interceptors/use-resources.interceptor';
import { ApiResource } from 'src/resources/api.resource';
import { CustomersResource } from 'src/resources/customer/customers.resource';
import { CustomerService } from 'src/services/customer.service';

@Controller({ path: 'customer' })
export class ShowController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(':id')
  @UseResources(CustomersResource)
  async show(@Param('id', ParseIntPipe) id: number) {
    const user = await this.customerService.show(id);

    return ApiResource.successResponse(user);
  }
}
