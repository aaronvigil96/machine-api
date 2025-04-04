import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AddSpareAlternativeDto } from "./dto/add-spare-alternative.interface";

@Injectable()
export class SpareAlternativeRelationsService {
    constructor(private readonly prismaService:PrismaService){}

    async create(addSpareAlternativeDto:AddSpareAlternativeDto){
        try{
            return this.prismaService.alternativeSpares.create({
                data: {
                    ...addSpareAlternativeDto
                }
            })
        }catch(err){
            console.log(err);
        }
    }
}