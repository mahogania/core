import { Module } from "@nestjs/common";
import { PurchaseReceiptItemModuleBase } from "./base/purchaseReceiptItem.module.base";
import { PurchaseReceiptItemService } from "./purchaseReceiptItem.service";
import { PurchaseReceiptItemController } from "./purchaseReceiptItem.controller";
import { PurchaseReceiptItemResolver } from "./purchaseReceiptItem.resolver";

@Module({
  imports: [PurchaseReceiptItemModuleBase],
  controllers: [PurchaseReceiptItemController],
  providers: [PurchaseReceiptItemService, PurchaseReceiptItemResolver],
  exports: [PurchaseReceiptItemService],
})
export class PurchaseReceiptItemModule {}
