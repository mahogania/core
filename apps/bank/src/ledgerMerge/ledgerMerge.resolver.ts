import * as graphql from "@nestjs/graphql";
import { LedgerMergeResolverBase } from "./base/ledgerMerge.resolver.base";
import { LedgerMerge } from "./base/LedgerMerge";
import { LedgerMergeService } from "./ledgerMerge.service";

@graphql.Resolver(() => LedgerMerge)
export class LedgerMergeResolver extends LedgerMergeResolverBase {
  constructor(protected readonly service: LedgerMergeService) {
    super(service);
  }
}
