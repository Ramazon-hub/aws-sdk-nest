import { S3 } from 'aws-sdk';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from './FileEntity';
import { FileRepository } from './FileRepository';
import { configs } from 'src/common/config';
import { v4 as uuid } from 'uuid';
@Injectable()
export class FileUploadService {
  constructor(
    @InjectRepository(FileEntity) private readonly repository: FileRepository,
  ) {}
  async upload(file) {
    const { originalname, mimetype } = file;
    console.log(file);

    const bucket = configs.AWS_BUCKET_NAME;
    await this.uploadS3(file.buffer, bucket, originalname, mimetype);
  }

  async uploadS3(buffer_file, bucket, name, mimetype) {
    console.log(configs);
    const s3 = new S3({
      credentials: {
        accessKeyId: configs.AWS_ACCESS_KEY_ID,
        secretAccessKey: configs.AWS_SECRET_ACCESS_KEY,
      },
      endpoint: 'https://nyc3.digitaloceanspaces.com',
    });

    const params = {
      ACL: 'public-read',
      Body: buffer_file,
      Bucket: bucket,
      Key: `dev/${uuid()}-${name}`,
      ContentType: mimetype,
    };

    const a = await s3.upload(params).promise();
    const fileDb = await this.repository.save({ url: a.Location });
    console.log(a);
  }
}
