import { Test, TestingModule } from '@nestjs/testing';
import { EduquestService } from './eduquest.service.js';

describe('EduquestService', () => {
  let service: EduquestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EduquestService],
    }).compile();

    service = module.get<EduquestService>(EduquestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
