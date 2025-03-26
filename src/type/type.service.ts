import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { PaginationDto } from "src/common/dto/pagination.dto";

@Injectable()
export class TypeService {
    constructor(private readonly prismaService:PrismaService){}

    async findAll(paginationDto:PaginationDto){
        const {skip = 0, take = 10} = paginationDto;
        return await this.prismaService.types.findMany({
            skip,
            take
        });
    }

    async findById(id:number){
        const type = await this.prismaService.types.findUnique({
            where: {
                id
            }
        })
        if( type === null ) throw new NotFoundException('That type does not exist');
        return type;
    }

    async create(createTypeDto:CreateTypeDto){
        try {
            return await this.prismaService.types.create({
                data: {
                    ...createTypeDto
                }
            })
        }catch(err){
            if(err.code === 'P2002') throw new ConflictException('That type is already created');
        }
    }

    async update(id:number, updateTypeDto:UpdateTypeDto){
        try{
            return await this.prismaService.types.update({
                where: {
                    id
                },
                data: {
                    ...updateTypeDto
                }
            })
        }catch(err){
            if(err.code === 'P2002') throw new ConflictException('That type already exist');
            if(err.code === 'P2025') throw new NotFoundException('That type does not exist');
        }
    }
}