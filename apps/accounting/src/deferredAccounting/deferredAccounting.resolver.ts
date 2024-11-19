import * as graphql from "@nestjs/graphql";
import { DeferredAccountingResolverBase } from "./base/deferredAccounting.resolver.base";
import { DeferredAccounting } from "./base/DeferredAccounting";
import { DeferredAccountingService } from "./deferredAccounting.service";

@graphql.Resolver(() => DeferredAccounting)
export class DeferredAccountingResolver extends DeferredAccountingResolverBase {
  constructor(protected readonly service: DeferredAccountingService) {
    super(service);
  }
}
