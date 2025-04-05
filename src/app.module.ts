import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiniRestModule } from './mini-rest/mini-rest.module';

@Module({
  imports: [MiniRestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
