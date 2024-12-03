import { Module } from "@nestjs/common";
import { ProductionPlanMaterialRequestWarehouseModuleBase } from "./base/productionPlanMaterialRequestWarehouse.module.base";
import { ProductionPlanMaterialRequestWarehouseService } from "./productionPlanMaterialRequestWarehouse.service";
import { ProductionPlanMaterialRequestWarehouseController } from "./productionPlanMaterialRequestWarehouse.controller";
import { ProductionPlanMaterialRequestWarehouseResolver } from "./productionPlanMaterialRequestWarehouse.resolver";

@Module({
  imports: [ProductionPlanMaterialRequestWarehouseModuleBase],
  controllers: [ProductionPlanMaterialRequestWarehouseController],
  providers: [
    ProductionPlanMaterialRequestWarehouseService,
    ProductionPlanMaterialRequestWarehouseResolver,
  ],
  exports: [ProductionPlanMaterialRequestWarehouseService],
})
export class ProductionPlanMaterialRequestWarehouseModule {}
