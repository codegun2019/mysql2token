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
import { PaginateDto } from 'src/dtos/users/paginate.dto';
import { CreateUserDto } from 'src/dtos/users/create.dto';
import { UpdateUserDto } from 'src/dtos/users/update.dto';
import { UserEntity } from 'src/entities/users.entity';
import { toInt } from 'src/helpers/to-int';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { get } from 'lodash';

//controller -> service -> repository(entity)

@Injectable()
export class UsersService {
  [x: string]: any;
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
      const newUser = this.userRepository.create(createUserDto);
      return await this.userRepository.save(newUser);
    } catch (error) {
      // Handle any potential database errors
      throw new BadRequestException('Failed to create user');
    }
  }

  async update(
    userId: number,
    UpdateUserDto: UpdateUserDto,
  ): Promise<{ statusCode: number; message: string; error?: string }> {
    try {
      // Check if the user with the given ID exists
      const existingUser = await this.userRepository.findOne({
        where: { id: userId },
      });

      if (!existingUser) {
        throw new BadRequestException('Failed to update user');
      }

      this.userRepository.update(existingUser.id, UpdateUserDto);
      await this.userRepository.save(existingUser);

      return {
        statusCode: 201,
        message: 'User updated successfully',
        error: 'false',
      };
    } catch (error) {
      throw new BadRequestException('Failed to update user');
    }
  }

  async show(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw Error('No uSer');
    }

    return user;
  }

  async paginate(dto: PaginateDto): Promise<Pagination<UserEntity>> {
    const builder: SelectQueryBuilder<UserEntity> =
      this.userRepository.createQueryBuilder('user');

    console.log(get(dto, 'search'));

    if (dto.search) {
      builder.where('user.name LIKE :search', {
        search: `${dto.search}%`,
      });
    }

    const options: IPaginationOptions = {
      page: toInt(get(dto, 'page')),
      limit: toInt(get(dto, 'perPage')),
    };

    return paginate<UserEntity>(builder, options);
  }

  async delete(id: number): Promise<UserEntity | null> {
    try {
      const user = await this.userRepository.findOne({ where: { id: id } });

      if (!user) {
        throw new NotFoundException('User not found');
      }
      const deletedUser = await this.userRepository.remove(user);

      return deletedUser || null;
    } catch (error) {
      throw new BadRequestException('Failed to delete user');
    }
  }
}
