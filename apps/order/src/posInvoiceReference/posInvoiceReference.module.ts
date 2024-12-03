import { Module } from "@nestjs/common";
import { PosInvoiceReferenceModuleBase } from "./base/posInvoiceReference.module.base";
import { PosInvoiceReferenceService } from "./posInvoiceReference.service";
import { PosInvoiceReferenceController } from "./posInvoiceReference.controller";
import { PosInvoiceReferenceResolver } from "./posInvoiceReference.resolver";

@Module({
  imports: [PosInvoiceReferenceModuleBase],
  controllers: [PosInvoiceReferenceController],
  providers: [PosInvoiceReferenceService, PosInvoiceReferenceResolver],
  exports: [PosInvoiceReferenceService],
})
export class PosInvoiceReferenceModule {}
