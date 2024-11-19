import { Module } from "@nestjs/common";
import { PosInvoiceItemModuleBase } from "./base/posInvoiceItem.module.base";
import { PosInvoiceItemService } from "./posInvoiceItem.service";
import { PosInvoiceItemController } from "./posInvoiceItem.controller";
import { PosInvoiceItemResolver } from "./posInvoiceItem.resolver";

@Module({
  imports: [PosInvoiceItemModuleBase],
  controllers: [PosInvoiceItemController],
  providers: [PosInvoiceItemService, PosInvoiceItemResolver],
  exports: [PosInvoiceItemService],
})
export class PosInvoiceItemModule {}
