import * as graphql from "@nestjs/graphql";
import { SalesOrderResolverBase } from "./base/salesOrder.resolver.base";
import { SalesOrder } from "./base/SalesOrder";
import { SalesOrderService } from "./salesOrder.service";

@graphql.Resolver(() => SalesOrder)
export class SalesOrderResolver extends SalesOrderResolverBase {
  constructor(protected readonly service: SalesOrderService) {
    super(service);
  }
}
