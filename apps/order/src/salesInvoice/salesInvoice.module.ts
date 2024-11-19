import { Module } from "@nestjs/common";
import { SalesInvoiceModuleBase } from "./base/salesInvoice.module.base";
import { SalesInvoiceService } from "./salesInvoice.service";
import { SalesInvoiceController } from "./salesInvoice.controller";
import { SalesInvoiceResolver } from "./salesInvoice.resolver";

@Module({
  imports: [SalesInvoiceModuleBase],
  controllers: [SalesInvoiceController],
  providers: [SalesInvoiceService, SalesInvoiceResolver],
  exports: [SalesInvoiceService],
})
export class SalesInvoiceModule {}
