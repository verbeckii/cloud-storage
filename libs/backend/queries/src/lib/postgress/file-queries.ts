import { Injectable } from '@nestjs/common';
import { prisma } from '@cloud-storage/backend/common/prisma-client';
import { FileType, FilesCreate } from '@cloud-storage/backend/common/types';

@Injectable()
export class FileQueries {
  async qCreateUserFiles(data: FilesCreate) {
    const users = await prisma.files.create({
      data,
    });
    return users;
  }

  async qGetUserFiles(userId: number, fileType: FileType) {
    const queryCondition =
      fileType === 'trash'
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
