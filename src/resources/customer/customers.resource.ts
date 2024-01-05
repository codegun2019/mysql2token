import { Expose, Type } from 'class-transformer';
import {  Resources } from '../resource';
import { CustomerDto } from './customer.dto';

export class CustomersResource extends Resources {
  @Expose()
  @Type(() => CustomerDto)
  data: CustomerDto[];
}
