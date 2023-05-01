import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '@cloud-storage/backend/services';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { users as TUsers } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UserId } from '@cloud-storage/backend/common/decorators';

@Controller('users')
@ApiTags('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post('/create')
  @ApiResponse({status: 200, description:'create new user'})
  createUser(@Body() createUserData: TUsers) {
    return this.UsersService.createUser(createUserData);
  }

  @Get()
  @ApiResponse({status: 200, description:'get all user'})
  getUsers() {
    return this.UsersService.getUsers();
  }

  @Get(':id')
  @ApiResponse({status: 200, description:'get user by id'})
  getUserById(@Param('id') id: number) {
    return this.UsersService.getUserById(+id);
  }

  @Post()
  @ApiResponse({status: 200, description:'get user by email'})
  getUserByEmail(@Body('email') email: string) {
    return this.UsersService.getUserByEmail(email);
  }

  @Patch(':id')
  @ApiResponse({status: 200, description:'update user'})
  updateUser(@Body() updateUserData: TUsers) {
    return this.UsersService.updateUser(updateUserData);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description:'delete user'})
  deleteUser(@Param('id') id: number) {
    return this.UsersService.deleteUser(+id);
  }

  @Get('/info/me')
  @UseGuards(JwtAuthGuard)
  async getMe(@UserId() id: number) {
    return this.UsersService.getUserById(id);
  }
}
