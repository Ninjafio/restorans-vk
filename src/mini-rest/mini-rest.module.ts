import { Module } from '@nestjs/common';
import { MiniRestService } from './mini-rest.service';
import { MiniRestController } from './mini-rest.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MiniRestController],
  providers: [MiniRestService]
})
export class MiniRestModule {}
