import { Module } from "@nestjs/common";
import { StockEntryDetailModuleBase } from "./base/stockEntryDetail.module.base";
import { StockEntryDetailService } from "./stockEntryDetail.service";
import { StockEntryDetailController } from "./stockEntryDetail.controller";
import { StockEntryDetailResolver } from "./stockEntryDetail.resolver";

@Module({
  imports: [StockEntryDetailModuleBase],
  controllers: [StockEntryDetailController],
  providers: [StockEntryDetailService, StockEntryDetailResolver],
  exports: [StockEntryDetailService],
})
export class StockEntryDetailModule {}
