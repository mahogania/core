import { Module } from "@nestjs/common";
import { ProductionPlanItemReferenceModuleBase } from "./base/productionPlanItemReference.module.base";
import { ProductionPlanItemReferenceService } from "./productionPlanItemReference.service";
import { ProductionPlanItemReferenceController } from "./productionPlanItemReference.controller";
import { ProductionPlanItemReferenceResolver } from "./productionPlanItemReference.resolver";

@Module({
  imports: [ProductionPlanItemReferenceModuleBase],
  controllers: [ProductionPlanItemReferenceController],
  providers: [
    ProductionPlanItemReferenceService,
    ProductionPlanItemReferenceResolver,
  ],
  exports: [ProductionPlanItemReferenceService],
})
export class ProductionPlanItemReferenceModule {}
