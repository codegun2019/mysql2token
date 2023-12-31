import { CreateUserController } from './create.controller';
import { DeleteUserController } from './delete.controller';
import { PaginateController } from './paginate.controller';
import { ShowController } from './show.controller';
import { UpdateController } from './update.controller';

const UserControllers = [
  ShowController,
  PaginateController,
  CreateUserController,
  DeleteUserController,
  UpdateController,
];

export default UserControllers;
