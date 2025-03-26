import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { BrandService } from "./brand.service";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";

@ApiTags('brands')
@Controller('brands')
export class BrandController {

    constructor(private readonly brandService:BrandService){}

    @Get()
    @ApiResponse({status: 200, description: 'Returning all brands.'})
    getAll(){
        return this.brandService.findAll();
    }

    @Get(':id')
    @ApiResponse({status: 404, description: 'That brand does not exist.'})
    @ApiResponse({status: 200, description: 'Returning brand.'})
    getById(@Param('id', ParseIntPipe)id:number){
        return this.brandService.findById(id);
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The brand has been successfully created.'})
    @ApiResponse({status: 409, description: 'That brand is already created.'})
    create(@Body()createBrandDto:CreateBrandDto){
        return this.brandService.create(createBrandDto);
    }

    @Patch(':id')
    @ApiResponse({status: 409, description: 'That brand already exist.'})
    @ApiResponse({status: 404, description: 'That brand does not exist.'})
    @ApiResponse({status: 200, description: 'Brand updated correctly.'})
    update(@Param('id', ParseIntPipe)id:number, @Body()updateBrandDto:UpdateBrandDto){
        return this.brandService.update(id, updateBrandDto);
    }
}