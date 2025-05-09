import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { PaginationDto } from "src/common/dto/pagination.dto";

@Injectable()
export class MachineService {
    constructor(private readonly prismaService:PrismaService){}

    async findAll(paginationDto:PaginationDto){
        const {skip = 0, take = 10} = paginationDto;
        return await this.prismaService.machines.findMany({
            skip,
            take,
        });
    }

    async findTotalCount(){
        const total = await this.prismaService.machines.findMany({
        })
        return {
            total: total.length
        }
    }

    async findById(id:number){
        const machine = await this.prismaService.machines.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                type: true,
                brand:true,
                spares: {
                    select: {
                        spare: true
                    }
                }
            }
        })
        if(machine === null) throw new NotFoundException('That machine does not exist');
        return {
            ...machine,
            spares: machine.spares.map(s => s.spare)
        };
    }

    async create(createMachineDto:CreateMachineDto){
        try{
            return await this.prismaService.machines.create({
                data: {
                    ...createMachineDto
                }
            })
        }catch(err){
            if(err.code === 'P2003') {
                if(err.meta.field_name === 'Machines_brandId_fkey (index)') throw new NotFoundException('That brandId does not exist');
                if(err.meta.field_name === 'Machines_typeId_fkey (index)') throw new NotFoundException('That typeId does not exist');
            }
            if(err.code === 'P2002') throw new ConflictException('That machine is already created');
        }
    }

    async update(id:number, updateMachineDto:UpdateMachineDto){
        try{
            return await this.prismaService.machines.update({
                where: {
                    id
                },
                data: {
                    ...updateMachineDto
                }
            })
        }catch(err){
            if(err.code === 'P2003') {
                if(err.meta.field_name === 'Machines_brandId_fkey (index)') throw new NotFoundException('That brandId does not exist');
                if(err.meta.field_name === 'Machines_typeId_fkey (index)') throw new NotFoundException('That typeId does not exist');
            }
            if(err.code === 'P2002') throw new ConflictException('That machine already exist');
            if(err.code === 'P2025') throw new NotFoundException('That machine does not exist');
        }
    }
}