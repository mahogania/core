import * as graphql from "@nestjs/graphql";
import { BankTransactionResolverBase } from "./base/bankTransaction.resolver.base";
import { BankTransaction } from "./base/BankTransaction";
import { BankTransactionService } from "./bankTransaction.service";

@graphql.Resolver(() => BankTransaction)
export class BankTransactionResolver extends BankTransactionResolverBase {
  constructor(protected readonly service: BankTransactionService) {
    super(service);
  }
}
