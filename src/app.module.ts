import { Module } from '@nestjs/common';
import { SystemDatabaseModule } from '@system/database/database.module';
import { AppApiModule } from './api/app-api.module';
import { SystemConfigModule } from './system/config/config.module';
import { SystemThrottlerModule } from './system/throttler/throttler.module';

@Module({
  imports: [
    /**
     * System
     */
    SystemConfigModule,
    SystemThrottlerModule,
    // SystemDatabaseModule,

    /**
     * Libs
     */

    /**
     * Application
     */
    AppApiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
