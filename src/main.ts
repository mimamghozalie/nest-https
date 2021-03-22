import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from "helmet";
import { readFileSync } from 'fs';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: readFileSync('./etc/letsencrypt/live/yudha.aiva.store/privkey.pem', 'utf8'),
      cert: readFileSync('./etc/letsencrypt/live/yudha.aiva.store/fullchain.pem', 'utf8'),
      ca: readFileSync('./etc/letsencrypt/live/yudha.aiva.store/chain.pem', 'utf8')
    }
  });


  app.use(helmet());

  await app.listen(3000);

  Logger.log(`Server lister ${3000}`)
}
bootstrap();
