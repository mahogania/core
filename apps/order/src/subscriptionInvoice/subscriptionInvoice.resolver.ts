import * as graphql from "@nestjs/graphql";
import { SubscriptionInvoiceResolverBase } from "./base/subscriptionInvoice.resolver.base";
import { SubscriptionInvoice } from "./base/SubscriptionInvoice";
import { SubscriptionInvoiceService } from "./subscriptionInvoice.service";

@graphql.Resolver(() => SubscriptionInvoice)
export class SubscriptionInvoiceResolver extends SubscriptionInvoiceResolverBase {
  constructor(protected readonly service: SubscriptionInvoiceService) {
    super(service);
  }
}
