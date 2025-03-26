import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { TypeService } from "./type.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { PaginationDto } from "src/common/dto/pagination.dto";

@ApiTags('types')
@Controller('types')
export class TypeController {

    constructor(private readonly typeService:TypeService){}

    @Get()
    @ApiResponse({status: 200, description: 'Returning all types.'})
    getAll(@Query() paginationDto:PaginationDto){
        return this.typeService.findAll(paginationDto);
    }

    @Get(':id')
    @ApiResponse({status: 404, description: 'That type does not exist.'})
    @ApiResponse({status: 200, description: 'Returning type.'})
    getById(@Param('id', ParseIntPipe)id:number){
        return this.typeService.findById(id);
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The type has been successfully created.'})
    @ApiResponse({status: 409, description: 'That type is already created.'})
    create(@Body()createTypeDto:CreateTypeDto){
        return this.typeService.create(createTypeDto);
    }

    @Patch(':id')
    @ApiResponse({status: 409, description: 'That type already exist.'})
    @ApiResponse({status: 404, description: 'That type does not exist.'})
    @ApiResponse({status: 200, description: 'Type updated correctly.'})
    update(@Param('id', ParseIntPipe)id:number, @Body()updateTypeDto:UpdateTypeDto){
        return this.typeService.update(id, updateTypeDto);
    }
}