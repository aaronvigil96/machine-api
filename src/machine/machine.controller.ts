import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { MachineService } from "./machine.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { PaginationDto } from "src/common/dto/pagination.dto";

@ApiTags('machines')
@Controller('machines')
export class MachineController {
    constructor(private readonly machineService:MachineService){}

    @Get()
    @ApiResponse({status: 200, description: 'Returning all machines.'})
    getAll(@Query() paginationDto:PaginationDto){
        return this.machineService.findAll(paginationDto);
    }

    @Get(':id')
    @ApiResponse({status: 404, description: 'That machine does not exist.'})
    @ApiResponse({status: 200, description: 'Returning machine.'})
    getById(@Param('id', ParseIntPipe)id:number){
        return this.machineService.findById(id);
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The machine has been successfully created.'})
    @ApiResponse({status: 404, description: 'That brandId or typeId does not exist.'})
    @ApiResponse({status: 409, description: 'That machine is already created.'})
    create(@Body()createMachineDto:CreateMachineDto){
        return this.machineService.create(createMachineDto);
    }

    @Patch(':id')
    @ApiResponse({status: 409, description: 'That machine already exist.'})
    @ApiResponse({status: 404, description: 'That machine does not exist.'})
    @ApiResponse({status: 200, description: 'Machine updated correctly.'})
    update(@Param('id', ParseIntPipe)id:number, @Body()updateMachineDto:UpdateMachineDto){
        return this.machineService.update(id, updateMachineDto);
    }
}