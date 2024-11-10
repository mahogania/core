import * as graphql from "@nestjs/graphql";
import { PaymentEntryReferenceResolverBase } from "./base/paymentEntryReference.resolver.base";
import { PaymentEntryReference } from "./base/PaymentEntryReference";
import { PaymentEntryReferenceService } from "./paymentEntryReference.service";

@graphql.Resolver(() => PaymentEntryReference)
export class PaymentEntryReferenceResolver extends PaymentEntryReferenceResolverBase {
  constructor(protected readonly service: PaymentEntryReferenceService) {
    super(service);
  }
}
