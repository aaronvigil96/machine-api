import { Injectable } from "@nestjs/common";
import { PaginationQueryDto } from "src/common/dto/pagination-query.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SearchService {

    constructor(private readonly prismaService:PrismaService){}

    async findSpare({skip=0, take=5, query}:PaginationQueryDto){
        const spares = await this.prismaService.spares.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                            mode: 'insensitive'
                        }
                    },
                    {
                        code: {
                            contains: query,
                            mode: 'insensitive'
                        }
                    }
                ]
            },
            include: {
                machines: {
                    select: {
                        machine: true
                    }
                },
                brand: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            },
            skip,
            take
        })
        return spares.map(spare => ({
            ...spare,
            machines: spare.machines.map(m => m.machine)
        }))
    }

    async findMachine({query, skip=0, take=5}:PaginationQueryDto){
        const machines = await this.prismaService.machines.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                            mode: 'insensitive'
                        }
                    }
                ]
            },
            select: {
                id: true,
                name: true,
                brand: {
                    select: {
                        name: true
                    }
                }
            },
            skip,
            take
        })
        return machines;
    }
}