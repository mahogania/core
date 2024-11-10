import { Module } from "@nestjs/common";
import { BomCreatorModuleBase } from "./base/bomCreator.module.base";
import { BomCreatorService } from "./bomCreator.service";
import { BomCreatorController } from "./bomCreator.controller";
import { BomCreatorResolver } from "./bomCreator.resolver";

@Module({
  imports: [BomCreatorModuleBase],
  controllers: [BomCreatorController],
  providers: [BomCreatorService, BomCreatorResolver],
  exports: [BomCreatorService],
})
export class BomCreatorModule {}
