import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import imageValidation from 'src/common/validation/imageValidation';
import { FileUploadService } from './FileUploadService';

@Controller('file')
export class FileController {
  constructor(private readonly service: FileUploadService) {}
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile(imageValidation) file: Express.Multer.File,
  ): Promise<void> {
    return this.service.upload(file);
  }
}
