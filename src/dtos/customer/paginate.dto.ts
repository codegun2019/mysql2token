import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PaginateDto {
  @IsString()
  page = '1';

  @IsString()
  perPage = '30';

  @IsOptional()
  search: string;
}
