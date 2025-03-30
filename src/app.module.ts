import { Module } from '@nestjs/common';
import { BrandModule } from './brand/brand.module';
import { TypeModule } from './type/type.module';
import { MachineModule } from './machine/machine.module';
import { SpareModule } from './spare/spare.module';
import { MachineSpareRelationsModule } from './machine-spare-relations/machine-spare-relations.module';
import { SearchModule } from './search/search.module';


@Module({
  imports: [BrandModule, TypeModule, MachineModule, SpareModule, MachineSpareRelationsModule, SearchModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
