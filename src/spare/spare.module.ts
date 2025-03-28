import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { SpareController } from "./spare.controller";
import { SpareService } from "./spare.service";

@Module({
    imports: [PrismaModule],
    controllers: [SpareController],
    providers: [SpareService]
})
export class SpareModule {

}