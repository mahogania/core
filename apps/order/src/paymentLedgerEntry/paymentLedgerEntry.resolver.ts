import * as graphql from "@nestjs/graphql";
import { PaymentLedgerEntryResolverBase } from "./base/paymentLedgerEntry.resolver.base";
import { PaymentLedgerEntry } from "./base/PaymentLedgerEntry";
import { PaymentLedgerEntryService } from "./paymentLedgerEntry.service";

@graphql.Resolver(() => PaymentLedgerEntry)
export class PaymentLedgerEntryResolver extends PaymentLedgerEntryResolverBase {
  constructor(protected readonly service: PaymentLedgerEntryService) {
    super(service);
  }
}
