import { config } from 'dotenv';
config();
export const configs = {
  PORT: process.env.PORT || 3000,
  DB_URL: 'postgres://postgres:ramazon@localhost:5432/aws',
  AWS_BUCKET_REGION: process.env.AWS_BUCKET_REGION,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
};
