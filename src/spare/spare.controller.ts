import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { SpareService } from "./spare.service";
import { CreateSpareDto } from "./dto/create-spare.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { PaginationDto } from "src/common/dto/pagination.dto";
import { UpdateSpareDto } from "./dto/update-spare.dto";

@ApiTags('spares')
@Controller('spares')
export class SpareController {
    constructor(private readonly spareService:SpareService){}

    @Get()
    @ApiResponse({status: 200, description: 'Returning all spares.'})
    getAll(@Query()paginationDto:PaginationDto){
        return this.spareService.findAll(paginationDto);
    }

    @Get('total')
    @ApiResponse({status: 200, description: 'Returning total count of spares'})
    getTotalCount(){
        return this.spareService.findTotalCount();
    }

    @Get(':id')
    @ApiResponse({status: 404, description: 'That spare does not exist.'})
    @ApiResponse({status: 200, description: 'Returning spare.'})
    getById(@Param('id',ParseIntPipe)id:number){
        return this.spareService.findById(id);
    }

    @Post()
    @ApiResponse({status: 201, description:'The spare has been successfully created.'})
    @ApiResponse({status: 404, description: 'That brandId or machineId does not exist.'})
    @ApiResponse({status: 409, description: 'That spare is already created.'})
    create(@Body()createSpareDto:CreateSpareDto){
        return this.spareService.create(createSpareDto);
    }

    @Patch(':id')
    @ApiResponse({status: 409, description: 'That spare already exist.'})
    @ApiResponse({status: 404, description: 'That spare does not exist.'})
    @ApiResponse({status: 200, description: 'Spare updated correctly.'})
    update(@Param('id',ParseIntPipe)id:number, @Body()updateSpareDto:UpdateSpareDto){
        return this.spareService.update(id, updateSpareDto);
    }
}