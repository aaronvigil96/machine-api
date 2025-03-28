import { Body, Controller, Post } from "@nestjs/common";
import { MachineSpareRelationsService } from "./machine-spare-relations.service";
import { AddSpareToMachineDto } from "./dto/add-spare-to-machine.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('machines-spare-relations')
@Controller('machine-spare-relations')
export class MachineSpareRelationsController {
    constructor(private readonly machineSpareRelationsService:MachineSpareRelationsService){}

    @Post()
    @ApiResponse({status: 201, description:'The relationship was created successfully.'})
    @ApiResponse({status: 404, description: 'That spareId or machineId does not exist.'})
    @ApiResponse({status: 409, description: 'That relation is already created.'})
    addSpareToMachine(@Body()addSpareToMachineDto:AddSpareToMachineDto){
        return this.machineSpareRelationsService.create(addSpareToMachineDto);
    }
}