import { Expose, Type } from 'class-transformer';
import { Resource } from '../resource';
import { CustomerDto } from './customer.dto';

export class CustomerResource extends Resource {
  @Expose()
  @Type(() => CustomerDto)
  data: CustomerDto;
}
