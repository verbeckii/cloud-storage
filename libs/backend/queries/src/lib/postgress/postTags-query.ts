import { Injectable } from '@nestjs/common';
import { prisma } from '@cloud-storage/backend/common/prisma-client';

@Injectable()
export class PostTagsQueries {
  async qCreatePostTags() {
    const postTags = await prisma.postTags.createMany({
      data: [
        { postId: 1, tagId: 2 },
        { postId: 1, tagId: 3 },
      ],
    });
    return postTags;
  }

  async qDeletePostTagsByPostId() {
    const postTags = await prisma.postTags.deleteMany({
      where: { postId: 1 },
    });
    return postTags;
  }

  async runQueriesInTransaction() {
    const result = await prisma.$transaction([
      prisma.postTags.deleteMany({
        where: { postId: 1 },
      }),
      prisma.postTags.createMany({
        data: [
          { postId: 1, tagId: 1 },
          { postId: 1, tagId: 3 },
        ],
      }),
    ]);
    return result;
  }
}
