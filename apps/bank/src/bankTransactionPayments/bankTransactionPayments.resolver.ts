import * as graphql from "@nestjs/graphql";
import { BankTransactionPaymentsResolverBase } from "./base/bankTransactionPayments.resolver.base";
import { BankTransactionPayments } from "./base/BankTransactionPayments";
import { BankTransactionPaymentsService } from "./bankTransactionPayments.service";

@graphql.Resolver(() => BankTransactionPayments)
export class BankTransactionPaymentsResolver extends BankTransactionPaymentsResolverBase {
  constructor(protected readonly service: BankTransactionPaymentsService) {
    super(service);
  }
}
