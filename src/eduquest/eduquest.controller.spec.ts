import { Test, TestingModule } from '@nestjs/testing';
import { EduquestController } from './eduquest.controller.js';
import { EduquestService } from './eduquest.service.js';

describe('EduquestController', () => {
  let controller: EduquestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EduquestController],
      providers: [EduquestService],
    }).compile();

    controller = module.get<EduquestController>(EduquestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
