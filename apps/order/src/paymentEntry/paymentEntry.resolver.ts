import * as graphql from "@nestjs/graphql";
import { PaymentEntryResolverBase } from "./base/paymentEntry.resolver.base";
import { PaymentEntry } from "./base/PaymentEntry";
import { PaymentEntryService } from "./paymentEntry.service";

@graphql.Resolver(() => PaymentEntry)
export class PaymentEntryResolver extends PaymentEntryResolverBase {
  constructor(protected readonly service: PaymentEntryService) {
    super(service);
  }
}
