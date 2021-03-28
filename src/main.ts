import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from "@nestjs/platform-express";
import { readFileSync } from 'fs';

// libs
import * as helmet from "helmet";

import { AppModule } from './app.module';

const { SSL, PORT, NODE_ENV, APP_NAME, DOMAIN } = process.env;
const PRODUCTION = NODE_ENV == 'production' ? true : false;

let httpsOptions = null;
if (SSL == 'ON') {
  httpsOptions = {
    key: readFileSync(`/etc/letsencrypt/live/${DOMAIN}/privkey.pem`, 'utf8'),
    cert: readFileSync(`/etc/letsencrypt/live/${DOMAIN}/fullchain.pem`, 'utf8'),
    ca: readFileSync(`/etc/letsencrypt/live/${DOMAIN}/chain.pem`, 'utf8')
  }
}

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
      logger: (PRODUCTION ? ['error'] : ['debug', 'log', 'error']),
      httpsOptions
    });

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        disableErrorMessages: PRODUCTION,
      }),
    );

    if (PRODUCTION) {
      app.use(helmet())
      app.set('trust proxy', 1)
    } else {
      app.enableCors()
    }

    await app.listen(PORT);

    Logger.log(
      `[${NODE_ENV.toUpperCase()}] ${SSL == 'ON' ? '[SSL]' : ''}listen on port: ${PORT}`,
      `${APP_NAME}`, true,
    );
  } catch (error) {
    Logger.error(error, error, 'Bootstrap');
  }
}
bootstrap();


