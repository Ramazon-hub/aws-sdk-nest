import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configs } from './common/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(configs.PORT, () => {
    console.info(`Server is listening in ${configs.PORT}`);
  });
}
bootstrap();
