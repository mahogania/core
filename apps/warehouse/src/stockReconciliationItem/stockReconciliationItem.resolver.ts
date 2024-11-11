import * as graphql from "@nestjs/graphql";
import { StockReconciliationItemResolverBase } from "./base/stockReconciliationItem.resolver.base";
import { StockReconciliationItem } from "./base/StockReconciliationItem";
import { StockReconciliationItemService } from "./stockReconciliationItem.service";

@graphql.Resolver(() => StockReconciliationItem)
export class StockReconciliationItemResolver extends StockReconciliationItemResolverBase {
  constructor(protected readonly service: StockReconciliationItemService) {
    super(service);
  }
}
