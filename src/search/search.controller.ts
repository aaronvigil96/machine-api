import { Controller, Get, Query } from "@nestjs/common";
import { SearchService } from "./search.service";
import { PaginationQueryDto } from "src/common/dto/pagination-query.dto";

@Controller('search')
export class SearchController {

    constructor(private readonly searchService:SearchService){}

    @Get('spares')
    findSpare(@Query()paginationQueryDto:PaginationQueryDto){
        return this.searchService.findSpare(paginationQueryDto);
    }

    @Get('machines')
    findMachine(@Query()paginationQueryDto:PaginationQueryDto){
        return this.searchService.findMachine(paginationQueryDto);
    }

    @Get('brands')
    findBrand(@Query()paginationQueryDto: PaginationQueryDto){
        return this.searchService.findBrand(paginationQueryDto);
    }
}