import * as graphql from "@nestjs/graphql";
import { LedgerMergeAccountsResolverBase } from "./base/ledgerMergeAccounts.resolver.base";
import { LedgerMergeAccounts } from "./base/LedgerMergeAccounts";
import { LedgerMergeAccountsService } from "./ledgerMergeAccounts.service";

@graphql.Resolver(() => LedgerMergeAccounts)
export class LedgerMergeAccountsResolver extends LedgerMergeAccountsResolverBase {
  constructor(protected readonly service: LedgerMergeAccountsService) {
    super(service);
  }
}
