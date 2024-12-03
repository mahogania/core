import { Module } from "@nestjs/common";
import { StockEntryTypeModuleBase } from "./base/stockEntryType.module.base";
import { StockEntryTypeService } from "./stockEntryType.service";
import { StockEntryTypeController } from "./stockEntryType.controller";
import { StockEntryTypeResolver } from "./stockEntryType.resolver";

@Module({
  imports: [StockEntryTypeModuleBase],
  controllers: [StockEntryTypeController],
  providers: [StockEntryTypeService, StockEntryTypeResolver],
  exports: [StockEntryTypeService],
})
export class StockEntryTypeModule {}
