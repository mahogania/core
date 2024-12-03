import * as graphql from "@nestjs/graphql";
import { StatementOfAccountsResolverBase } from "./base/statementOfAccounts.resolver.base";
import { StatementOfAccounts } from "./base/StatementOfAccounts";
import { StatementOfAccountsService } from "./statementOfAccounts.service";

@graphql.Resolver(() => StatementOfAccounts)
export class StatementOfAccountsResolver extends StatementOfAccountsResolverBase {
  constructor(protected readonly service: StatementOfAccountsService) {
    super(service);
  }
}
