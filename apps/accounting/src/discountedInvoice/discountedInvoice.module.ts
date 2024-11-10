import { Module } from "@nestjs/common";
import { DiscountedInvoiceModuleBase } from "./base/discountedInvoice.module.base";
import { DiscountedInvoiceService } from "./discountedInvoice.service";
import { DiscountedInvoiceController } from "./discountedInvoice.controller";
import { DiscountedInvoiceResolver } from "./discountedInvoice.resolver";

@Module({
  imports: [DiscountedInvoiceModuleBase],
  controllers: [DiscountedInvoiceController],
  providers: [DiscountedInvoiceService, DiscountedInvoiceResolver],
  exports: [DiscountedInvoiceService],
})
export class DiscountedInvoiceModule {}
