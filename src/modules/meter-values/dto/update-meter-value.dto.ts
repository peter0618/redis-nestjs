import { PartialType } from '@nestjs/mapped-types';
import { CreateMeterValueDto } from './create-meter-value.dto';

export class UpdateMeterValueDto extends PartialType(CreateMeterValueDto) {}
