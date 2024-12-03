import { Module } from "@nestjs/common";
import { UomModuleBase } from "./base/uom.module.base";
import { UomService } from "./uom.service";
import { UomController } from "./uom.controller";
import { UomResolver } from "./uom.resolver";

@Module({
  imports: [UomModuleBase],
  controllers: [UomController],
  providers: [UomService, UomResolver],
  exports: [UomService],
})
export class UomModule {}
