import { Module } from "@nestjs/common";
import { SalesOrderModuleBase } from "./base/salesOrder.module.base";
import { SalesOrderService } from "./salesOrder.service";
import { SalesOrderController } from "./salesOrder.controller";
import { SalesOrderResolver } from "./salesOrder.resolver";

@Module({
  imports: [SalesOrderModuleBase],
  controllers: [SalesOrderController],
  providers: [SalesOrderService, SalesOrderResolver],
  exports: [SalesOrderService],
})
export class SalesOrderModule {}
