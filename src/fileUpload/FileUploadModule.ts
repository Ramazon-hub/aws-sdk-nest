import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './FileEntity';
import { FileController } from './FileUploadController';
import { FileUploadService } from './FileUploadService';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  controllers: [FileController],
  providers: [FileUploadService],
})
export class FileModule {}
