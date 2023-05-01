import { File, FileType } from '@cloud-storage/backend/common/types';
import { FileQueries } from '@cloud-storage/backend/queries';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  constructor(private readonly FileQueries: FileQueries) {}

  async getUserFiles(userId: number, fileType: FileType) {
    try {
      const files = await this.FileQueries.qGetUserFiles(userId, fileType);
      return files;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createFile(file: File, userId: number) {
    try {
      const data = {
        filename: file.filename,
        originalname: file.originalname,
        size: file.size,
        mimetype: file.mimetype,
        userId,
      };
      const result = await this.FileQueries.qCreateUserFiles(data);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
