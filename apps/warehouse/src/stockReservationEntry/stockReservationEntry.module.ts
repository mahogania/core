import { Module } from "@nestjs/common";
import { StockReservationEntryModuleBase } from "./base/stockReservationEntry.module.base";
import { StockReservationEntryService } from "./stockReservationEntry.service";
import { StockReservationEntryController } from "./stockReservationEntry.controller";
import { StockReservationEntryResolver } from "./stockReservationEntry.resolver";

@Module({
  imports: [StockReservationEntryModuleBase],
  controllers: [StockReservationEntryController],
  providers: [StockReservationEntryService, StockReservationEntryResolver],
  exports: [StockReservationEntryService],
})
export class StockReservationEntryModule {}
