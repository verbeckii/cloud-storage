import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from '@cloud-storage/backend/services';
import { FileQueries } from '@cloud-storage/backend/queries';

@Module({
  controllers: [FilesController],
  providers: [FilesService, FileQueries],
})
export class FilesModule {}
