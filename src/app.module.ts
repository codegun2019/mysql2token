import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseMysqlProviderModule } from './providers/database/mysql/provider.module';
//rEntity
import { UserEntity } from './entities/users.entity';
import { CustomerEntity }  from './entities/customer.entity';
//Controllers
import AuthControllers from './controllers/auth';
import UserControllers from './controllers/users';
import CustomerControllers from './controllers/customer';
//Service
import { UsersService } from './services/users.service';
import { CustomerService } from './services/customer.service';
@Module({
  imports: [
    DatabaseMysqlProviderModule,
    TypeOrmModule.forFeature([UserEntity,CustomerEntity]),
  ],
  controllers: [...UserControllers, ...CustomerControllers],
  providers: [UsersService,CustomerService],
})
export class AppModule {}
