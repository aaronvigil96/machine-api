import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AddSpareToMachineDto } from "./dto/add-spare-to-machine.dto";

@Injectable()
export class MachineSpareRelationsService {
    constructor(private readonly prismaService:PrismaService){}

    async create(addSpareToMachine:AddSpareToMachineDto){
        try{
            return await this.prismaService.sparesOnMachines.create({
                data: {
                    ...addSpareToMachine
                }
            })
        }catch(err){
            if(err.code === 'P2002') throw new ConflictException('that relationship is already created');
            if(err.code === 'P2003') {
                if(err.meta.field_name === 'SparesOnMachines_spareId_fkey (index)') throw new NotFoundException('That spareId does not exist');
                if(err.meta.field_name === 'SparesOnMachines_machineId_fkey (index)') throw new NotFoundException('That machineId does not exist');
            }
        }
    }
}