import { Module } from "@nestjs/common";
import { PosClosingEntryTaxesModuleBase } from "./base/posClosingEntryTaxes.module.base";
import { PosClosingEntryTaxesService } from "./posClosingEntryTaxes.service";
import { PosClosingEntryTaxesController } from "./posClosingEntryTaxes.controller";
import { PosClosingEntryTaxesResolver } from "./posClosingEntryTaxes.resolver";

@Module({
  imports: [PosClosingEntryTaxesModuleBase],
  controllers: [PosClosingEntryTaxesController],
  providers: [PosClosingEntryTaxesService, PosClosingEntryTaxesResolver],
  exports: [PosClosingEntryTaxesService],
})
export class PosClosingEntryTaxesModule {}
