import { Module } from "@nestjs/common";
import { ProductionPlanItemModuleBase } from "./base/productionPlanItem.module.base";
import { ProductionPlanItemService } from "./productionPlanItem.service";
import { ProductionPlanItemController } from "./productionPlanItem.controller";
import { ProductionPlanItemResolver } from "./productionPlanItem.resolver";

@Module({
  imports: [ProductionPlanItemModuleBase],
  controllers: [ProductionPlanItemController],
  providers: [ProductionPlanItemService, ProductionPlanItemResolver],
  exports: [ProductionPlanItemService],
})
export class ProductionPlanItemModule {}
