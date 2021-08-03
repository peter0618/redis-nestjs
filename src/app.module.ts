import { MeterValuesModule } from './modules/meter-values/meter-values.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [MeterValuesModule],
})
export class AppModule {}
