import { Module } from "@nestjs/common";
import { SalesOrderItemModuleBase } from "./base/salesOrderItem.module.base";
import { SalesOrderItemService } from "./salesOrderItem.service";
import { SalesOrderItemController } from "./salesOrderItem.controller";
import { SalesOrderItemResolver } from "./salesOrderItem.resolver";

@Module({
  imports: [SalesOrderItemModuleBase],
  controllers: [SalesOrderItemController],
  providers: [SalesOrderItemService, SalesOrderItemResolver],
  exports: [SalesOrderItemService],
})
export class SalesOrderItemModule {}
