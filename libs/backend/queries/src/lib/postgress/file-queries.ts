import { Injectable } from '@nestjs/common';
import { prisma } from '@cloud-storage/backend/common/prisma-client';
import { files as TFiles } from '@prisma/client';

@Injectable()
export class FileQueries {
  async qCreateUserFiles(data: any) {
    const users = await prisma.files.create({
      data,
    });
    return users;
  }

  async qGetUserFiles(userId: number, fileType: 'TRASH' | 'image') {
    const queryCondition =
      fileType === 'TRASH'
        ? { deletedAt: { not: null } }
        : { mimetype: { contains: 'image' } };
    const users = await prisma.files.findMany({
      where: {
        userId,
        ...queryCondition,
      },
    });
    return users;
  }
}
