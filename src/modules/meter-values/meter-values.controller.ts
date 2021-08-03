import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeterValuesService } from './meter-values.service';
import { CreateMeterValueDto } from './dto/create-meter-value.dto';
import { UpdateMeterValueDto } from './dto/update-meter-value.dto';

@Controller('meter-values')
export class MeterValuesController {
  constructor(private readonly meterValuesService: MeterValuesService) {}

  @Post()
  create(@Body() createMeterValueDto: CreateMeterValueDto) {
    return this.meterValuesService.create(createMeterValueDto);
  }

  @Get()
  findAll() {
    return this.meterValuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meterValuesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeterValueDto: UpdateMeterValueDto) {
    return this.meterValuesService.update(+id, updateMeterValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meterValuesService.remove(+id);
  }
}
