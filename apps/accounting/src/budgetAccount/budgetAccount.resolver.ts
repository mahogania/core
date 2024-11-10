import * as graphql from "@nestjs/graphql";
import { BudgetAccountResolverBase } from "./base/budgetAccount.resolver.base";
import { BudgetAccount } from "./base/BudgetAccount";
import { BudgetAccountService } from "./budgetAccount.service";

@graphql.Resolver(() => BudgetAccount)
export class BudgetAccountResolver extends BudgetAccountResolverBase {
  constructor(protected readonly service: BudgetAccountService) {
    super(service);
  }
}
