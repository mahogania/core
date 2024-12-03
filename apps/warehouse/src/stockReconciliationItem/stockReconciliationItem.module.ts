import { Module } from "@nestjs/common";
import { StockReconciliationItemModuleBase } from "./base/stockReconciliationItem.module.base";
import { StockReconciliationItemService } from "./stockReconciliationItem.service";
import { StockReconciliationItemController } from "./stockReconciliationItem.controller";
import { StockReconciliationItemResolver } from "./stockReconciliationItem.resolver";

@Module({
  imports: [StockReconciliationItemModuleBase],
  controllers: [StockReconciliationItemController],
  providers: [StockReconciliationItemService, StockReconciliationItemResolver],
  exports: [StockReconciliationItemService],
})
export class StockReconciliationItemModule {}
