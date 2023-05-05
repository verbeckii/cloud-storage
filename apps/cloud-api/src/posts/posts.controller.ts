import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PostQueries } from '@cloud-storage/backend/queries';

@Controller('posts')
@ApiTags('posts')
@ApiBearerAuth()
export class PostsController {
  constructor(private readonly PostQueries: PostQueries) {}

  @Post('/create')
  createPost() {
    return this.PostQueries.qCreatePost();
  }

  @Get()
  getPosts() {
    return this.PostQueries.qGetPosts();
  }

  @Put()
  updatePosts() {
    return this.PostQueries.qUpdatePosts()
  }
}
