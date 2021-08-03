import { CacheModule, Module } from '@nestjs/common';
import { MeterValuesService } from './meter-values.service';
import { MeterValuesController } from './meter-values.controller';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
  controllers: [MeterValuesController],
  providers: [MeterValuesService],
})
export class MeterValuesModule {}
