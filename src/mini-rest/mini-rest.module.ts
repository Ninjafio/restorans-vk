import { Module } from '@nestjs/common';
import { MiniRestService } from './mini-rest.service';
import { MiniRestController } from './mini-rest.controller';

@Module({
  providers: [MiniRestService],
  controllers: [MiniRestController]
})
export class MiniRestModule {}
