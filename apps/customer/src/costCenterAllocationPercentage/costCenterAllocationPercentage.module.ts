import { Module } from "@nestjs/common";
import { CostCenterAllocationPercentageModuleBase } from "./base/costCenterAllocationPercentage.module.base";
import { CostCenterAllocationPercentageService } from "./costCenterAllocationPercentage.service";
import { CostCenterAllocationPercentageController } from "./costCenterAllocationPercentage.controller";
import { CostCenterAllocationPercentageResolver } from "./costCenterAllocationPercentage.resolver";

@Module({
  imports: [CostCenterAllocationPercentageModuleBase],
  controllers: [CostCenterAllocationPercentageController],
  providers: [
    CostCenterAllocationPercentageService,
    CostCenterAllocationPercentageResolver,
  ],
  exports: [CostCenterAllocationPercentageService],
})
export class CostCenterAllocationPercentageModule {}
