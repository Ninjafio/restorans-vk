import { Injectable } from '@nestjs/common';
import { miniRest } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MiniRestService {
    constructor(private prisma: PrismaService) {}

    async createMiniRest(data: {
        name: string;
        imageBg: string;
    }): Promise<miniRest> {
        return this.prisma.miniRest.create({ data });
    }

    async getMiniRests(): Promise<miniRest[]> {
        return this.prisma.miniRest.findMany();
    }
}
