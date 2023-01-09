import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { S3, SharedIniFileCredentials } from 'aws-sdk';
import { AwsSdkModule } from 'nest-aws-sdk';
import { configs } from './common/config';
import { S3ManagerModule } from './common/s3Manager/s3ManagerModule';
import { FileModule } from './fileUpload/FileUploadModule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: configs.DB_URL,
      entities: ['dist/**/*Entity{.ts,.js}'],
      synchronize: true,
    }),
    FileModule,
    // S3ManagerModule,
    // AwsSdkModule.forRoot({
    //   defaultServiceOptions: {
    //     region: 'us-east-1',
    //     credentials: new SharedIniFileCredentials({
    //       profile: 'my-profile',
    //     }),
    //   },
    //   services: [S3],
    // }),
  ],
})
export class AppModule {}
