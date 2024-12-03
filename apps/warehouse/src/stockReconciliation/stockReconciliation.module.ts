import { Module } from "@nestjs/common";
import { StockReconciliationModuleBase } from "./base/stockReconciliation.module.base";
import { StockReconciliationService } from "./stockReconciliation.service";
import { StockReconciliationController } from "./stockReconciliation.controller";
import { StockReconciliationResolver } from "./stockReconciliation.resolver";

@Module({
  imports: [StockReconciliationModuleBase],
  controllers: [StockReconciliationController],
  providers: [StockReconciliationService, StockReconciliationResolver],
  exports: [StockReconciliationService],
})
export class StockReconciliationModule {}
