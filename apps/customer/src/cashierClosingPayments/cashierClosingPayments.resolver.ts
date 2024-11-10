import * as graphql from "@nestjs/graphql";
import { CashierClosingPaymentsResolverBase } from "./base/cashierClosingPayments.resolver.base";
import { CashierClosingPayments } from "./base/CashierClosingPayments";
import { CashierClosingPaymentsService } from "./cashierClosingPayments.service";

@graphql.Resolver(() => CashierClosingPayments)
export class CashierClosingPaymentsResolver extends CashierClosingPaymentsResolverBase {
  constructor(protected readonly service: CashierClosingPaymentsService) {
    super(service);
  }
}
