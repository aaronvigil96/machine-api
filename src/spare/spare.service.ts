import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateSpareDto } from "./dto/create-spare.dto";
import { PaginationDto } from "src/common/dto/pagination.dto";
import { UpdateSpareDto } from "./dto/update-spare.dto";

@Injectable()
export class SpareService {
    constructor(private readonly prismaService:PrismaService){}

    async findAll({skip = 0, take = 5}:PaginationDto){
        return await this.prismaService.spares.findMany({
            skip,
            take,
            include: {
                brand: true
            },
            orderBy: {
                id:"desc"
            }
        })
    }

    async findTotalCount(){
        const total = await this.prismaService.spares.findMany({})
        return {
            total: total.length
        }
    }

    async findById(id:number){
        const spare = await this.prismaService.spares.findUnique({
            where: {
                id
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
                },
                alternatives: {
                    select: {
                        alternative: {
                            include: {
                                brand: true
                            }
                        }
                    }
                }
            }
        })
        if(spare === null) throw new NotFoundException('That spare does not exist');

        return {
            ...spare,
            machines: spare.machines.map(m => m.machine),
            alternatives: spare.alternatives.map(a => a.alternative)
        };
    }

    async create(createSpareDto:CreateSpareDto){
        try{
            return await this.prismaService.spares.create({
                data: {
                    ...createSpareDto
                }
            })
        }catch(err){
            if(err.code === 'P2002') throw new ConflictException('The spare part with that code is already created');
            if(err.code === 'P2003') {
                if(err.meta.field_name === 'Spares_brandId_fkey (index)') throw new NotFoundException('That brandId does not exist');
            }
        }
    }

    async update(id:number, updateSpareDto:UpdateSpareDto){
        try{
            return await this.prismaService.spares.update({
                where: {
                    id
                },
                data: {
                    ...updateSpareDto
                }
            })
        }catch(err){
            if(err.code === 'P2003') {
                if(err.meta.field_name === 'Spares_brandId_fkey (index)') throw new NotFoundException('That brandId does not exist');
            }
            if(err.code === 'P2002') throw new ConflictException('That spare already exist');
            if(err.code === 'P2025') throw new NotFoundException('That spare does not exist');
        }
    }
}