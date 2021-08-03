import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { CreateMeterValueDto } from './dto/create-meter-value.dto';
import { UpdateMeterValueDto } from './dto/update-meter-value.dto';
import { Cache } from 'cache-manager'; // Cache 는 자동 import 가 안됩니다.

@Injectable()
export class MeterValuesService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  /**
   * meterValue 를 생성합니다.
   * @param createMeterValueDto
   */
  async create(createMeterValueDto: CreateMeterValueDto) {
    let value = await this.cacheManager.get<any[]>('key');
    if (!value) {
      value = [];
    }
    value.push(createMeterValueDto);
    return await this.cacheManager.set('key', value, { ttl: 86400 });
  }

  /**
   * meterValue 를 조회합니다.
   */
  async findAll() {
    const values = await this.cacheManager.get('key');
    return values;
  }

  findOne(id: number) {
    return `This action returns a #${id} meterValue`;
  }

  update(id: number, updateMeterValueDto: UpdateMeterValueDto) {
    return `This action updates a #${id} meterValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} meterValue`;
  }
}
