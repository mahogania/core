import * as graphql from "@nestjs/graphql";
import { StockReconciliationResolverBase } from "./base/stockReconciliation.resolver.base";
import { StockReconciliation } from "./base/StockReconciliation";
import { StockReconciliationService } from "./stockReconciliation.service";

@graphql.Resolver(() => StockReconciliation)
export class StockReconciliationResolver extends StockReconciliationResolverBase {
  constructor(protected readonly service: StockReconciliationService) {
    super(service);
  }
}
