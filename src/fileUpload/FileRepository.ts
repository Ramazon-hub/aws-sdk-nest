import { Repository } from 'typeorm';
import { FileEntity } from './FileEntity';

export type FileRepository = Repository<FileEntity>;
