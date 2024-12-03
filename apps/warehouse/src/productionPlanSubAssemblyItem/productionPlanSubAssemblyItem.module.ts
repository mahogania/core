import { Module } from "@nestjs/common";
import { ProductionPlanSubAssemblyItemModuleBase } from "./base/productionPlanSubAssemblyItem.module.base";
import { ProductionPlanSubAssemblyItemService } from "./productionPlanSubAssemblyItem.service";
import { ProductionPlanSubAssemblyItemController } from "./productionPlanSubAssemblyItem.controller";
import { ProductionPlanSubAssemblyItemResolver } from "./productionPlanSubAssemblyItem.resolver";

@Module({
  imports: [ProductionPlanSubAssemblyItemModuleBase],
  controllers: [ProductionPlanSubAssemblyItemController],
  providers: [
    ProductionPlanSubAssemblyItemService,
    ProductionPlanSubAssemblyItemResolver,
  ],
  exports: [ProductionPlanSubAssemblyItemService],
})
export class ProductionPlanSubAssemblyItemModule {}
