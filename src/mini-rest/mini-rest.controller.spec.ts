import { Test, TestingModule } from '@nestjs/testing';
import { MiniRestController } from './mini-rest.controller';

describe('MiniRestController', () => {
  let controller: MiniRestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiniRestController],
    }).compile();

    controller = module.get<MiniRestController>(MiniRestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
