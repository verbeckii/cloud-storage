import { Injectable } from '@nestjs/common';
import { prisma } from '@cloud-storage/backend/common/prisma-client';

@Injectable()
export class PostQueries {
  async qCreatePost() {
    const post = await prisma.post.create({
        data: {
          title: 'Types of relations',
          tags: { create: [{ name: 'dev' }, { name: 'prisma' }] },
        },
      })
    return post;
  }
  
  async qGetPosts() {
    const posts = await prisma.post.findMany({
        include: { tags: true },
      })
    return posts;
  }

  async qUpdatePosts() {
    const posts = await prisma.post.update({
        where: { id: 1 },
        data: {
            title: 'Prisma is awesome!',
            tags: { set: [{ id: 1 }, { id: 2 }],  },
          },
          include: { tags: true },
      })
    return posts;
  }
  
}
