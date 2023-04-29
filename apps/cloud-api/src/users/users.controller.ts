import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from '@cloud-storage/backend/services';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { users as TUsers } from '@prisma/client';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  @ApiResponse({status: 200, description:'create new user'})
  createUser(@Body() createUserData: TUsers) {
    return this.usersService.createUser(createUserData);
  }

  @Get()
  @ApiResponse({status: 200, description:'get all user'})
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  @ApiResponse({status: 200, description:'get user by id'})
  getUserById(@Param('id') id: number) {
    return this.usersService.getUserById(+id);
  }

  @Post()
  @ApiResponse({status: 200, description:'get user by email'})
  getUserByEmail(@Body('email') email: string) {
    return this.usersService.getUserByEmail(email);
  }

  @Patch(':id')
  @ApiResponse({status: 200, description:'update user'})
  updateUser(@Body() updateUserData: TUsers) {
    return this.usersService.updateUser(updateUserData);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description:'delete user'})
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(+id);
  }
}
