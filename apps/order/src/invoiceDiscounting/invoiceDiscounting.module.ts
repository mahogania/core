import { Module } from "@nestjs/common";
import { InvoiceDiscountingModuleBase } from "./base/invoiceDiscounting.module.base";
import { InvoiceDiscountingService } from "./invoiceDiscounting.service";
import { InvoiceDiscountingController } from "./invoiceDiscounting.controller";
import { InvoiceDiscountingResolver } from "./invoiceDiscounting.resolver";

@Module({
  imports: [InvoiceDiscountingModuleBase],
  controllers: [InvoiceDiscountingController],
  providers: [InvoiceDiscountingService, InvoiceDiscountingResolver],
  exports: [InvoiceDiscountingService],
})
export class InvoiceDiscountingModule {}
