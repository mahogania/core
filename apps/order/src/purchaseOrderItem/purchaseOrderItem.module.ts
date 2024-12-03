import { Module } from "@nestjs/common";
import { PurchaseOrderItemModuleBase } from "./base/purchaseOrderItem.module.base";
import { PurchaseOrderItemService } from "./purchaseOrderItem.service";
import { PurchaseOrderItemController } from "./purchaseOrderItem.controller";
import { PurchaseOrderItemResolver } from "./purchaseOrderItem.resolver";

@Module({
  imports: [PurchaseOrderItemModuleBase],
  controllers: [PurchaseOrderItemController],
  providers: [PurchaseOrderItemService, PurchaseOrderItemResolver],
  exports: [PurchaseOrderItemService],
})
export class PurchaseOrderItemModule {}
