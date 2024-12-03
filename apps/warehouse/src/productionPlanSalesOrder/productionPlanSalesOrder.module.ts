import { Module } from "@nestjs/common";
import { ProductionPlanSalesOrderModuleBase } from "./base/productionPlanSalesOrder.module.base";
import { ProductionPlanSalesOrderService } from "./productionPlanSalesOrder.service";
import { ProductionPlanSalesOrderController } from "./productionPlanSalesOrder.controller";
import { ProductionPlanSalesOrderResolver } from "./productionPlanSalesOrder.resolver";

@Module({
  imports: [ProductionPlanSalesOrderModuleBase],
  controllers: [ProductionPlanSalesOrderController],
  providers: [
    ProductionPlanSalesOrderService,
    ProductionPlanSalesOrderResolver,
  ],
  exports: [ProductionPlanSalesOrderService],
})
export class ProductionPlanSalesOrderModule {}
