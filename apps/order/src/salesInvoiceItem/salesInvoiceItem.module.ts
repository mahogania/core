import { Module } from "@nestjs/common";
import { SalesInvoiceItemModuleBase } from "./base/salesInvoiceItem.module.base";
import { SalesInvoiceItemService } from "./salesInvoiceItem.service";
import { SalesInvoiceItemController } from "./salesInvoiceItem.controller";
import { SalesInvoiceItemResolver } from "./salesInvoiceItem.resolver";

@Module({
  imports: [SalesInvoiceItemModuleBase],
  controllers: [SalesInvoiceItemController],
  providers: [SalesInvoiceItemService, SalesInvoiceItemResolver],
  exports: [SalesInvoiceItemService],
})
export class SalesInvoiceItemModule {}
