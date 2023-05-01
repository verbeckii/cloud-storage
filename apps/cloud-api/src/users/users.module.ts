import { Module } from '@nestjs/common';
import { UsersService } from '@cloud-storage/backend/services';
import { UsersController } from './users.controller';
import { UserQueries } from '@cloud-storage/backend/queries';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserQueries],
})
export class UsersModule {}
