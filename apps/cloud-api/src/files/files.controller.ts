import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  UseGuards,
  Get,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileStorage } from '@cloud-storage/backend/common/helpers';
import { JwtAuthGuard } from '@cloud-storage/backend/auth';
import { UserId } from '@cloud-storage/backend/common/decorators';
import { FilesService } from '@cloud-storage/backend/services';
import { FileType } from '@cloud-storage/backend/common/types';
import { UserFilesResponse } from '@cloud-storage/backend/common/swagger-types';

@Controller('files')
@ApiTags('files')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class FilesController {
  constructor(private readonly FilesService: FilesService) {}

  @Get()
  @ApiResponse({status: 200, description:'get user files', type: UserFilesResponse})
  @ApiQuery({name: 'type', required: false})
  getUserFiles(@UserId() userId: number, @Query('type') fileType: FileType) {
    return this.FilesService.getUserFiles(userId, fileType);
  }

  @Post()
  @ApiResponse({status: 200, description:'upload file', type: UserFilesResponse})
  @UseInterceptors(FileInterceptor('file', { storage: fileStorage }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 })],
      })
    )
    file: Express.Multer.File,
    @UserId() userId: number
  ) {
    return this.FilesService.createFile(file, userId);
  }
}
