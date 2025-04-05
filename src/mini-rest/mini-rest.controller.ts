import { Body, Controller, Get, Post } from '@nestjs/common';
import { MiniRestService } from './mini-rest.service';
import { miniRest } from '@prisma/client';

@Controller('mini-rest')
export class MiniRestController {
    constructor(private readonly miniRestService: MiniRestService) {}
    @Post()
    async createMiniRest(
        @Body() data: { name: string; imageBg: string },
    ): Promise<miniRest> {
        return this.miniRestService.createMiniRest(data);
    }
    
    @Get()
    async getMiniRests(): Promise<miniRest[]> {
        return this.miniRestService.getMiniRests();
    }
}
