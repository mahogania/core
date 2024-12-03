import { Module } from "@nestjs/common";
import { PurchaseInvoiceItemModuleBase } from "./base/purchaseInvoiceItem.module.base";
import { PurchaseInvoiceItemService } from "./purchaseInvoiceItem.service";
import { PurchaseInvoiceItemController } from "./purchaseInvoiceItem.controller";
import { PurchaseInvoiceItemResolver } from "./purchaseInvoiceItem.resolver";

@Module({
  imports: [PurchaseInvoiceItemModuleBase],
  controllers: [PurchaseInvoiceItemController],
  providers: [PurchaseInvoiceItemService, PurchaseInvoiceItemResolver],
  exports: [PurchaseInvoiceItemService],
})
export class PurchaseInvoiceItemModule {}
