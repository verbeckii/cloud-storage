import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostQueries } from '@cloud-storage/backend/queries';

@Module({
  controllers: [PostsController],
  providers: [PostQueries],
})
export class PostsModule {}
