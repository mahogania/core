import { Module } from "@nestjs/common";
import { PurchaseInvoiceAdvanceModuleBase } from "./base/purchaseInvoiceAdvance.module.base";
import { PurchaseInvoiceAdvanceService } from "./purchaseInvoiceAdvance.service";
import { PurchaseInvoiceAdvanceController } from "./purchaseInvoiceAdvance.controller";
import { PurchaseInvoiceAdvanceResolver } from "./purchaseInvoiceAdvance.resolver";

@Module({
  imports: [PurchaseInvoiceAdvanceModuleBase],
  controllers: [PurchaseInvoiceAdvanceController],
  providers: [PurchaseInvoiceAdvanceService, PurchaseInvoiceAdvanceResolver],
  exports: [PurchaseInvoiceAdvanceService],
})
export class PurchaseInvoiceAdvanceModule {}
