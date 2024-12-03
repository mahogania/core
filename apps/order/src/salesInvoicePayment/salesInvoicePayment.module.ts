import { Module } from "@nestjs/common";
import { SalesInvoicePaymentModuleBase } from "./base/salesInvoicePayment.module.base";
import { SalesInvoicePaymentService } from "./salesInvoicePayment.service";
import { SalesInvoicePaymentController } from "./salesInvoicePayment.controller";
import { SalesInvoicePaymentResolver } from "./salesInvoicePayment.resolver";

@Module({
  imports: [SalesInvoicePaymentModuleBase],
  controllers: [SalesInvoicePaymentController],
  providers: [SalesInvoicePaymentService, SalesInvoicePaymentResolver],
  exports: [SalesInvoicePaymentService],
})
export class SalesInvoicePaymentModule {}
