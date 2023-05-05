import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostQueries, PostTagsQueries } from '@cloud-storage/backend/queries';

@Module({
  controllers: [PostsController],
  providers: [PostQueries, PostTagsQueries],
})
export class PostsModule {}
