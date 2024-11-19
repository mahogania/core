import { Module } from "@nestjs/common";
import { PackingSlipModuleBase } from "./base/packingSlip.module.base";
import { PackingSlipService } from "./packingSlip.service";
import { PackingSlipController } from "./packingSlip.controller";
import { PackingSlipResolver } from "./packingSlip.resolver";

@Module({
  imports: [PackingSlipModuleBase],
  controllers: [PackingSlipController],
  providers: [PackingSlipService, PackingSlipResolver],
  exports: [PackingSlipService],
})
export class PackingSlipModule {}
