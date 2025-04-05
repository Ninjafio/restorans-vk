import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiniRestModule } from './mini-rest/mini-rest.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MiniRestModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
