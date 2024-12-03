import { Module } from "@nestjs/common";
import { PosOpeningEntryDetailModuleBase } from "./base/posOpeningEntryDetail.module.base";
import { PosOpeningEntryDetailService } from "./posOpeningEntryDetail.service";
import { PosOpeningEntryDetailController } from "./posOpeningEntryDetail.controller";
import { PosOpeningEntryDetailResolver } from "./posOpeningEntryDetail.resolver";

@Module({
  imports: [PosOpeningEntryDetailModuleBase],
  controllers: [PosOpeningEntryDetailController],
  providers: [PosOpeningEntryDetailService, PosOpeningEntryDetailResolver],
  exports: [PosOpeningEntryDetailService],
})
export class PosOpeningEntryDetailModule {}
