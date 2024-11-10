import * as graphql from "@nestjs/graphql";
import { AccountingPeriodResolverBase } from "./base/accountingPeriod.resolver.base";
import { AccountingPeriod } from "./base/AccountingPeriod";
import { AccountingPeriodService } from "./accountingPeriod.service";

@graphql.Resolver(() => AccountingPeriod)
export class AccountingPeriodResolver extends AccountingPeriodResolverBase {
  constructor(protected readonly service: AccountingPeriodService) {
    super(service);
  }
}
