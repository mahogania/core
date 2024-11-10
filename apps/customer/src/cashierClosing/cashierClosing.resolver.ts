import * as graphql from "@nestjs/graphql";
import { CashierClosingResolverBase } from "./base/cashierClosing.resolver.base";
import { CashierClosing } from "./base/CashierClosing";
import { CashierClosingService } from "./cashierClosing.service";

@graphql.Resolver(() => CashierClosing)
export class CashierClosingResolver extends CashierClosingResolverBase {
  constructor(protected readonly service: CashierClosingService) {
    super(service);
  }
}
