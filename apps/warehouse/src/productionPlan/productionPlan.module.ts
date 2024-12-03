import { Module } from "@nestjs/common";
import { ProductionPlanModuleBase } from "./base/productionPlan.module.base";
import { ProductionPlanService } from "./productionPlan.service";
import { ProductionPlanController } from "./productionPlan.controller";
import { ProductionPlanResolver } from "./productionPlan.resolver";

@Module({
  imports: [ProductionPlanModuleBase],
  controllers: [ProductionPlanController],
  providers: [ProductionPlanService, ProductionPlanResolver],
  exports: [ProductionPlanService],
})
export class ProductionPlanModule {}
