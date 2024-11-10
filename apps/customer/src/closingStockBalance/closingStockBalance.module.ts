import { Module } from "@nestjs/common";
import { ClosingStockBalanceModuleBase } from "./base/closingStockBalance.module.base";
import { ClosingStockBalanceService } from "./closingStockBalance.service";
import { ClosingStockBalanceController } from "./closingStockBalance.controller";
import { ClosingStockBalanceResolver } from "./closingStockBalance.resolver";

@Module({
  imports: [ClosingStockBalanceModuleBase],
  controllers: [ClosingStockBalanceController],
  providers: [ClosingStockBalanceService, ClosingStockBalanceResolver],
  exports: [ClosingStockBalanceService],
})
export class ClosingStockBalanceModule {}
