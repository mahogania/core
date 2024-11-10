import * as graphql from "@nestjs/graphql";
import { ClosingStockBalanceResolverBase } from "./base/closingStockBalance.resolver.base";
import { ClosingStockBalance } from "./base/ClosingStockBalance";
import { ClosingStockBalanceService } from "./closingStockBalance.service";

@graphql.Resolver(() => ClosingStockBalance)
export class ClosingStockBalanceResolver extends ClosingStockBalanceResolverBase {
  constructor(protected readonly service: ClosingStockBalanceService) {
    super(service);
  }
}
