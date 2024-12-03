import { Module } from "@nestjs/common";
import { PosClosingEntryDetailModuleBase } from "./base/posClosingEntryDetail.module.base";
import { PosClosingEntryDetailService } from "./posClosingEntryDetail.service";
import { PosClosingEntryDetailController } from "./posClosingEntryDetail.controller";
import { PosClosingEntryDetailResolver } from "./posClosingEntryDetail.resolver";

@Module({
  imports: [PosClosingEntryDetailModuleBase],
  controllers: [PosClosingEntryDetailController],
  providers: [PosClosingEntryDetailService, PosClosingEntryDetailResolver],
  exports: [PosClosingEntryDetailService],
})
export class PosClosingEntryDetailModule {}
