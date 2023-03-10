import { Module } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { AwsSdkModule } from 'nest-aws-sdk';
import { S3ManagerService } from './s3ManagerService';

@Module({
  imports: [AwsSdkModule.forFeatures([S3])],
  providers: [S3ManagerService],
  exports: [S3ManagerService],
})
export class S3ManagerModule {}
