import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { PaginateDto } from 'src/dtos/customer/paginate.dto';
import { CustomerEntity } from 'src/entities/customer.entity';
import { toInt } from 'src/helpers/to-int';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { get } from 'lodash';
import { CreateCustomerDto } from 'src/dtos/customer/create.dto';

//controller -> service -> repository(entity)

@Injectable()
export class CustomerService {
  [x: string]: any;
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async create(
    createCustomerDto: CreateCustomerDto,
  ): Promise<{ statusCode: number; message: string; error?: string }> {
    try {
      const existingUser = await this.customerRepository.findOne({
        where: { email: createCustomerDto.email },
      });

      if (existingUser) {
        throw new BadRequestException('Failed to delete user');
      }

      const newUser = this.customerRepository.create(createCustomerDto);
      await this.customerRepository.save(newUser);

      return {
        statusCode: 201,
        message: 'User created successfully',
        error: 'false',
      };
    } catch (error) {
      throw new BadRequestException('Failed to create user');
    }
  }

  async update(
    userId: number,
    updateCustomerDto: CreateCustomerDto,
  ): Promise<{ statusCode: number; message: string; error?: string }> {
    try {
      // Check if the user with the given ID exists
      const existingUser = await this.customerRepository.findOne({
        where: { customer_id: userId },
      });

      if (!existingUser) {
        throw new BadRequestException('Failed to updated user');
      }

      this.customerRepository.update(
        existingUser.customer_id,
        updateCustomerDto,
      );
      await this.customerRepository.save(existingUser);

      return {
        statusCode: 201,
        message: 'User updated successfully',
        error: 'false',
      };
    } catch (error) {
      throw new BadRequestException('Failed to update user');
    }
  }

  async show(userId: number): Promise<CustomerEntity> {
    const user = await this.customerRepository.findOne({
      where: { customer_id: userId },
    });

    if (!user) {
      throw new BadRequestException('NO to delete user');
    }

    return user;
  }

  async paginate(dto: PaginateDto): Promise<Pagination<CustomerEntity>> {
    const builder: SelectQueryBuilder<CustomerEntity> =
      this.customerRepository.createQueryBuilder('user');

    console.log(get(dto, 'search'));

    if (dto.search) {
      builder.where('user.customer_name LIKE :search', {
        search: `${dto.search}%`,
      });
    }

    const options: IPaginationOptions = {
      page: toInt(get(dto, 'page')),
      limit: toInt(get(dto, 'perPage')),
    };

    return paginate<CustomerEntity>(builder, options);
  }

  async delete(userId: number): Promise<CustomerEntity | null> {
    try {
      const user = await this.customerRepository.findOne({
        where: { customer_id: userId },
      });

      if (!user) {
        throw new NotFoundException('User not found');
      }
      const deletedUser = await this.customerRepository.remove(user);

      return deletedUser || null;
    } catch (error) {
      throw new BadRequestException('Failed to delete user');
    }
  }
}
