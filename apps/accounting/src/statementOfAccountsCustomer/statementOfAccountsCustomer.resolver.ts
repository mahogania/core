import * as graphql from "@nestjs/graphql";
import { StatementOfAccountsCustomerResolverBase } from "./base/statementOfAccountsCustomer.resolver.base";
import { StatementOfAccountsCustomer } from "./base/StatementOfAccountsCustomer";
import { StatementOfAccountsCustomerService } from "./statementOfAccountsCustomer.service";

@graphql.Resolver(() => StatementOfAccountsCustomer)
export class StatementOfAccountsCustomerResolver extends StatementOfAccountsCustomerResolverBase {
  constructor(protected readonly service: StatementOfAccountsCustomerService) {
    super(service);
  }
}
