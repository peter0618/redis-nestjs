import { Test, TestingModule } from '@nestjs/testing';
import { MeterValuesController } from './meter-values.controller';
import { MeterValuesService } from './meter-values.service';

describe('MeterValuesController', () => {
  let controller: MeterValuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeterValuesController],
      providers: [MeterValuesService],
    }).compile();

    controller = module.get<MeterValuesController>(MeterValuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
