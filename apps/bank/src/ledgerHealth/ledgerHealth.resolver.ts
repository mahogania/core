import * as graphql from "@nestjs/graphql";
import { LedgerHealthResolverBase } from "./base/ledgerHealth.resolver.base";
import { LedgerHealth } from "./base/LedgerHealth";
import { LedgerHealthService } from "./ledgerHealth.service";

@graphql.Resolver(() => LedgerHealth)
export class LedgerHealthResolver extends LedgerHealthResolverBase {
  constructor(protected readonly service: LedgerHealthService) {
    super(service);
  }
}
