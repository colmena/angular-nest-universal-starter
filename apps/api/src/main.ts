import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ServerAppModule } from './app/server-app.module';

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

enableProdMode();

async function bootstrap() {
  const app = await NestFactory.create(ServerAppModule);
  await app.listen(PORT, HOST);
}

bootstrap()
  .then(() => Logger.log(`Server listening on http://${HOST}:${PORT}`))
  .catch(err => console.error(err));
