import { Module } from "@nestjs/common";
import { PurchaseOrderItemSuppliedModuleBase } from "./base/purchaseOrderItemSupplied.module.base";
import { PurchaseOrderItemSuppliedService } from "./purchaseOrderItemSupplied.service";
import { PurchaseOrderItemSuppliedController } from "./purchaseOrderItemSupplied.controller";
import { PurchaseOrderItemSuppliedResolver } from "./purchaseOrderItemSupplied.resolver";

@Module({
  imports: [PurchaseOrderItemSuppliedModuleBase],
  controllers: [PurchaseOrderItemSuppliedController],
  providers: [
    PurchaseOrderItemSuppliedService,
    PurchaseOrderItemSuppliedResolver,
  ],
  exports: [PurchaseOrderItemSuppliedService],
})
export class PurchaseOrderItemSuppliedModule {}
