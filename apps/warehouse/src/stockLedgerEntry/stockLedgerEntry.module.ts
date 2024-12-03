import { Module } from "@nestjs/common";
import { StockLedgerEntryModuleBase } from "./base/stockLedgerEntry.module.base";
import { StockLedgerEntryService } from "./stockLedgerEntry.service";
import { StockLedgerEntryController } from "./stockLedgerEntry.controller";
import { StockLedgerEntryResolver } from "./stockLedgerEntry.resolver";

@Module({
  imports: [StockLedgerEntryModuleBase],
  controllers: [StockLedgerEntryController],
  providers: [StockLedgerEntryService, StockLedgerEntryResolver],
  exports: [StockLedgerEntryService],
})
export class StockLedgerEntryModule {}
