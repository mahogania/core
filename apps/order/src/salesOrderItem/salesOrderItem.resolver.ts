import * as graphql from "@nestjs/graphql";
import { SalesOrderItemResolverBase } from "./base/salesOrderItem.resolver.base";
import { SalesOrderItem } from "./base/SalesOrderItem";
import { SalesOrderItemService } from "./salesOrderItem.service";

@graphql.Resolver(() => SalesOrderItem)
export class SalesOrderItemResolver extends SalesOrderItemResolverBase {
  constructor(protected readonly service: SalesOrderItemService) {
    super(service);
  }
}
