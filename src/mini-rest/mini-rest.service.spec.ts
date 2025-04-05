import { Test, TestingModule } from '@nestjs/testing';
import { MiniRestService } from './mini-rest.service';

describe('MiniRestService', () => {
  let service: MiniRestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiniRestService],
    }).compile();

    service = module.get<MiniRestService>(MiniRestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
