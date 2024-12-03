import * as graphql from "@nestjs/graphql";
import { UnreconcilePaymentEntriesResolverBase } from "./base/unreconcilePaymentEntries.resolver.base";
import { UnreconcilePaymentEntries } from "./base/UnreconcilePaymentEntries";
import { UnreconcilePaymentEntriesService } from "./unreconcilePaymentEntries.service";

@graphql.Resolver(() => UnreconcilePaymentEntries)
export class UnreconcilePaymentEntriesResolver extends UnreconcilePaymentEntriesResolverBase {
  constructor(protected readonly service: UnreconcilePaymentEntriesService) {
    super(service);
  }
}
