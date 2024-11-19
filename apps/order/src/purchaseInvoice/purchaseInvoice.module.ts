import { Module } from "@nestjs/common";
import { PurchaseInvoiceModuleBase } from "./base/purchaseInvoice.module.base";
import { PurchaseInvoiceService } from "./purchaseInvoice.service";
import { PurchaseInvoiceController } from "./purchaseInvoice.controller";
import { PurchaseInvoiceResolver } from "./purchaseInvoice.resolver";

@Module({
  imports: [PurchaseInvoiceModuleBase],
  controllers: [PurchaseInvoiceController],
  providers: [PurchaseInvoiceService, PurchaseInvoiceResolver],
  exports: [PurchaseInvoiceService],
})
export class PurchaseInvoiceModule {}
