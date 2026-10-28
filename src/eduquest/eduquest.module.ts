import { Module } from '@nestjs/common';
import { EduquestService } from './eduquest.service.js';
import { EduquestController } from './eduquest.controller.js';

@Module({
  controllers: [EduquestController],
  providers: [EduquestService],
})
export class EduquestModule {}
