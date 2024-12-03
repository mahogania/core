import { Module } from "@nestjs/common";
import { PosInvoiceModuleBase } from "./base/posInvoice.module.base";
import { PosInvoiceService } from "./posInvoice.service";
import { PosInvoiceController } from "./posInvoice.controller";
import { PosInvoiceResolver } from "./posInvoice.resolver";

@Module({
  imports: [PosInvoiceModuleBase],
  controllers: [PosInvoiceController],
  providers: [PosInvoiceService, PosInvoiceResolver],
  exports: [PosInvoiceService],
})
export class PosInvoiceModule {}
