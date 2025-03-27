import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { PaginationDto } from "src/common/dto/pagination.dto";

@Injectable()
export class BrandService {

    constructor(private readonly prismaService:PrismaService){}

    async findAll(paginationDto:PaginationDto){
        const {skip = 0, take = 10} = paginationDto;
        return await this.prismaService.brands.findMany({
            skip,
            take
        });
    }

    async findById(id:number){
        const brand = await this.prismaService.brands.findUnique({
            where: {
                id
            }
        });
        if(brand === null) throw new NotFoundException('That brand does not exist');
        return brand;
    }

    async create(createBrandDto:CreateBrandDto){
        try {
            return await this.prismaService.brands.create({
                data: {
                    ...createBrandDto
                }
            })
        }catch(err){
            if(err.code === 'P2002') throw new ConflictException('That brand is already created');
        }
    }

    async update(id:number, updateBrandDto:UpdateBrandDto){
        try{
            return await this.prismaService.brands.update({
                where: {
                    id
                },
                data: {
                    ...updateBrandDto
                }
            })
        }catch(err){
            if(err.code === 'P2002') throw new ConflictException('That brand already exist');
            if(err.code === 'P2025') throw new NotFoundException('That brand does not exist');
        }
    }
}