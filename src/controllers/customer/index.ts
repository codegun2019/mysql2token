import { DeleteUserController } from './delete.controller';
import { PaginateController } from './paginate.controller';
import { ShowController } from './show.controller';
import { CreateController } from './create.controller';
import { UpdateController } from './update.controller';

const CustomerControllers = [
  ShowController,
  PaginateController,
  DeleteUserController,
  CreateController,
  UpdateController,
];

export default CustomerControllers;
