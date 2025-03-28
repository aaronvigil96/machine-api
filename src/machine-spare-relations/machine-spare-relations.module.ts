import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { MachineSpareRelationsController } from "./machine-spare-relations.controller";
import { MachineSpareRelationsService } from "./machine-spare-relations.service";

@Module({
    imports: [PrismaModule],
    controllers: [MachineSpareRelationsController],
    providers: [MachineSpareRelationsService]
})
export class MachineSpareRelationsModule {

}