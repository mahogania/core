import * as graphql from "@nestjs/graphql";
import { DiscountedInvoiceResolverBase } from "./base/discountedInvoice.resolver.base";
import { DiscountedInvoice } from "./base/DiscountedInvoice";
import { DiscountedInvoiceService } from "./discountedInvoice.service";

@graphql.Resolver(() => DiscountedInvoice)
export class DiscountedInvoiceResolver extends DiscountedInvoiceResolverBase {
  constructor(protected readonly service: DiscountedInvoiceService) {
    super(service);
  }
}
