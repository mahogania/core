import * as graphql from "@nestjs/graphql";
import { BankAccountResolverBase } from "./base/bankAccount.resolver.base";
import { BankAccount } from "./base/BankAccount";
import { BankAccountService } from "./bankAccount.service";

@graphql.Resolver(() => BankAccount)
export class BankAccountResolver extends BankAccountResolverBase {
  constructor(protected readonly service: BankAccountService) {
    super(service);
  }
}
