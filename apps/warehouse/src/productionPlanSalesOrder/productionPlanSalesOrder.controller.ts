import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductionPlanSalesOrderService } from "./productionPlanSalesOrder.service";
import { ProductionPlanSalesOrderControllerBase } from "./base/productionPlanSalesOrder.controller.base";

@swagger.ApiTags("productionPlanSalesOrders")
@common.Controller("productionPlanSalesOrders")
export class ProductionPlanSalesOrderController extends ProductionPlanSalesOrderControllerBase {
  constructor(protected readonly service: ProductionPlanSalesOrderService) {
    super(service);
  }
}
