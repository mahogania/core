import { Module } from "@nestjs/common";
import { CostCenterAllocationModuleBase } from "./base/costCenterAllocation.module.base";
import { CostCenterAllocationService } from "./costCenterAllocation.service";
import { CostCenterAllocationController } from "./costCenterAllocation.controller";
import { CostCenterAllocationResolver } from "./costCenterAllocation.resolver";

@Module({
  imports: [CostCenterAllocationModuleBase],
  controllers: [CostCenterAllocationController],
  providers: [CostCenterAllocationService, CostCenterAllocationResolver],
  exports: [CostCenterAllocationService],
})
export class CostCenterAllocationModule {}
