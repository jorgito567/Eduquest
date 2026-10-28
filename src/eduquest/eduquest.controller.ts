import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EduquestService } from './eduquest.service.js';
import { CreateEduquestDto } from './dto/create-eduquest.dto.js';
import { UpdateEduquestDto } from './dto/update-eduquest.dto.js';

@Controller('eduquest')
export class EduquestController {
  constructor(private readonly eduquestService: EduquestService) {}

  @Post()
  create(@Body() createEduquestDto: CreateEduquestDto) {
    return this.eduquestService.create(createEduquestDto);
  }

  @Get()
  findAll() {
    return this.eduquestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eduquestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEduquestDto: UpdateEduquestDto) {
    return this.eduquestService.update(+id, updateEduquestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eduquestService.remove(+id);
  }
}
