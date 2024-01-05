import { Controller, Body, HttpStatus, Patch, Param } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';
import { UpdateUserDto } from '../../dtos/users/update.dto'; // Adjust the path accordingly

@Controller('User')
export class UpdateController {
  constructor(private readonly userService: UsersService) {}

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<{ statusCode: HttpStatus; message: string; error?: string }> {
    const updatedUser = await this.userService.update(id, updateUserDto);
    return updatedUser;
  }
}
