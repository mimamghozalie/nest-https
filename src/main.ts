import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from "helmet";
import { readFileSync } from 'fs';
import { Logger } from '@nestjs/common';

const PORT = 3000;
const SSL = true;

let httpsOptions = null;
if (SSL) {
  httpsOptions = {
    key: readFileSync('/etc/letsencrypt/live/yudha.aiva.store/privkey.pem', 'utf8'),
    cert: readFileSync('/etc/letsencrypt/live/yudha.aiva.store/fullchain.pem', 'utf8'),
    ca: readFileSync('/etc/letsencrypt/live/yudha.aiva.store/chain.pem', 'utf8')
  }
}

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      httpsOptions
    });


    app.use(helmet());

    await app.listen(3000);

    Logger.log(
      `run at http${SSL ? 's' : ''}://localhost:${PORT}`,
      'NEST Test Project',
    );
  } catch (error) {
    Logger.error(error, error, 'Bootstrap');
  }
}
bootstrap();


