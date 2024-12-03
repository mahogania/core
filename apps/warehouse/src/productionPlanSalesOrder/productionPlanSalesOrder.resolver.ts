import * as graphql from "@nestjs/graphql";
import { ProductionPlanSalesOrderResolverBase } from "./base/productionPlanSalesOrder.resolver.base";
import { ProductionPlanSalesOrder } from "./base/ProductionPlanSalesOrder";
import { ProductionPlanSalesOrderService } from "./productionPlanSalesOrder.service";

@graphql.Resolver(() => ProductionPlanSalesOrder)
export class ProductionPlanSalesOrderResolver extends ProductionPlanSalesOrderResolverBase {
  constructor(protected readonly service: ProductionPlanSalesOrderService) {
    super(service);
  }
}
