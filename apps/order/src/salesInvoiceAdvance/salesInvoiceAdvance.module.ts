import { Module } from "@nestjs/common";
import { SalesInvoiceAdvanceModuleBase } from "./base/salesInvoiceAdvance.module.base";
import { SalesInvoiceAdvanceService } from "./salesInvoiceAdvance.service";
import { SalesInvoiceAdvanceController } from "./salesInvoiceAdvance.controller";
import { SalesInvoiceAdvanceResolver } from "./salesInvoiceAdvance.resolver";

@Module({
  imports: [SalesInvoiceAdvanceModuleBase],
  controllers: [SalesInvoiceAdvanceController],
  providers: [SalesInvoiceAdvanceService, SalesInvoiceAdvanceResolver],
  exports: [SalesInvoiceAdvanceService],
})
export class SalesInvoiceAdvanceModule {}
