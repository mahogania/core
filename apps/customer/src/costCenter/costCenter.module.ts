import { Module } from "@nestjs/common";
import { CostCenterModuleBase } from "./base/costCenter.module.base";
import { CostCenterService } from "./costCenter.service";
import { CostCenterController } from "./costCenter.controller";
import { CostCenterResolver } from "./costCenter.resolver";

@Module({
  imports: [CostCenterModuleBase],
  controllers: [CostCenterController],
  providers: [CostCenterService, CostCenterResolver],
  exports: [CostCenterService],
})
export class CostCenterModule {}
