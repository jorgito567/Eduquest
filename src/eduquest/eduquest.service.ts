import { Injectable } from '@nestjs/common';
import { CreateEduquestDto } from './dto/create-eduquest.dto.js';
import { UpdateEduquestDto } from './dto/update-eduquest.dto.js';

@Injectable()
export class EduquestService {
  create(createEduquestDto: CreateEduquestDto) {
    return 'This action adds a new eduquest';
  }

  findAll() {
    return `This action returns all eduquest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eduquest`;
  }

  update(id: number, updateEduquestDto: UpdateEduquestDto) {
    return `This action updates a #${id} eduquest`;
  }

  remove(id: number) {
    return `This action removes a #${id} eduquest`;
  }
}
