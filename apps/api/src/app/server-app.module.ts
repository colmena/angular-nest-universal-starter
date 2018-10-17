import { Module } from '@nestjs/common';
import { join } from 'path';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { ServerAppController } from './server-app.controller'

@Module({
  controllers: [ServerAppController],
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist', 'apps', 'admin'),
      bundle: require('../../../../dist/apps/admin-server/main.js'),
    }),
  ],
})
export class ServerAppModule {}
