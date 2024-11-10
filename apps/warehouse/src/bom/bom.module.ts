import { Module } from "@nestjs/common";
import { BomModuleBase } from "./base/bom.module.base";
import { BomService } from "./bom.service";
import { BomController } from "./bom.controller";
import { BomResolver } from "./bom.resolver";

@Module({
  imports: [BomModuleBase],
  controllers: [BomController],
  providers: [BomService, BomResolver],
  exports: [BomService],
})
export class BomModule {}
