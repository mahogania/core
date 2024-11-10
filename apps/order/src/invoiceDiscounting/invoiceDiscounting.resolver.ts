import * as graphql from "@nestjs/graphql";
import { InvoiceDiscountingResolverBase } from "./base/invoiceDiscounting.resolver.base";
import { InvoiceDiscounting } from "./base/InvoiceDiscounting";
import { InvoiceDiscountingService } from "./invoiceDiscounting.service";

@graphql.Resolver(() => InvoiceDiscounting)
export class InvoiceDiscountingResolver extends InvoiceDiscountingResolverBase {
  constructor(protected readonly service: InvoiceDiscountingService) {
    super(service);
  }
}
