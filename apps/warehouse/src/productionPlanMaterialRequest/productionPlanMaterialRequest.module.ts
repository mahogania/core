import { Module } from "@nestjs/common";
import { ProductionPlanMaterialRequestModuleBase } from "./base/productionPlanMaterialRequest.module.base";
import { ProductionPlanMaterialRequestService } from "./productionPlanMaterialRequest.service";
import { ProductionPlanMaterialRequestController } from "./productionPlanMaterialRequest.controller";
import { ProductionPlanMaterialRequestResolver } from "./productionPlanMaterialRequest.resolver";

@Module({
  imports: [ProductionPlanMaterialRequestModuleBase],
  controllers: [ProductionPlanMaterialRequestController],
  providers: [
    ProductionPlanMaterialRequestService,
    ProductionPlanMaterialRequestResolver,
  ],
  exports: [ProductionPlanMaterialRequestService],
})
export class ProductionPlanMaterialRequestModule {}
