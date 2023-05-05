import { Injectable } from '@nestjs/common';
import { prisma } from '@cloud-storage/backend/common/prisma-client';

@Injectable()
export class PostQueries {
  async qCreatePost() {
    const post = await prisma.post.create({
        data: {
          title: 'Types of relations',
          tags: { create: [{ tag: { create: { name: 'dev' } } }, { tag: { create: { name: 'prisma' } } },],},
        },
      })
    return post;
  }
  
  async qGetPosts() {
    const posts = await prisma.post.findMany({
        include: { tags: { include: { tag: true } } },
      })

    //   const result = posts.map((post) => {
    //     return { ...post, tags: post.tags.map((tag) => tag.tag) }
    //   })
    return posts;
  }
  
}
