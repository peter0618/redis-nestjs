import { Test, TestingModule } from '@nestjs/testing';
import { MeterValuesService } from './meter-values.service';

describe('MeterValuesService', () => {
  let service: MeterValuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeterValuesService],
    }).compile();

    service = module.get<MeterValuesService>(MeterValuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
