import { PartialType } from '@nestjs/mapped-types';
import { CreateEduquestDto } from './create-eduquest.dto.js';

export class UpdateEduquestDto extends PartialType(CreateEduquestDto) {}
