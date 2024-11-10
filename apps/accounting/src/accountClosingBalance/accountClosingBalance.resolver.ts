import * as graphql from "@nestjs/graphql";
import { AccountClosingBalanceResolverBase } from "./base/accountClosingBalance.resolver.base";
import { AccountClosingBalance } from "./base/AccountClosingBalance";
import { AccountClosingBalanceService } from "./accountClosingBalance.service";

@graphql.Resolver(() => AccountClosingBalance)
export class AccountClosingBalanceResolver extends AccountClosingBalanceResolverBase {
  constructor(protected readonly service: AccountClosingBalanceService) {
    super(service);
  }
}
