import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { SpareAlternativeRelationsController } from "./spare-alternative-relations.controller";
import { SpareAlternativeRelationsService } from "./spare-alternative-relations.service";

@Module({
    imports: [PrismaModule],
    controllers: [SpareAlternativeRelationsController],
    providers: [SpareAlternativeRelationsService]
})
export class SpareAlternativeRelationsModule {

}