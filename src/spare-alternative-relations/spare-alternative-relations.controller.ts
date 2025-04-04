import { Body, Controller, Post } from "@nestjs/common";
import { SpareAlternativeRelationsService } from "./spare-alternative-relations.service";
import { AddSpareAlternativeDto } from "./dto/add-spare-alternative.interface";

@Controller('spare-alternative-relations')
export class SpareAlternativeRelationsController {
    constructor(private readonly spareAlternativeRelationsService:SpareAlternativeRelationsService){}

    @Post()
    addSpareAlternative(@Body() addSpareAlternativeDto:AddSpareAlternativeDto){
        return this.spareAlternativeRelationsService.create(addSpareAlternativeDto);
    }

}