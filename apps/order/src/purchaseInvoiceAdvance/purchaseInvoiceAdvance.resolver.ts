import * as graphql from "@nestjs/graphql";
import { PurchaseInvoiceAdvanceResolverBase } from "./base/purchaseInvoiceAdvance.resolver.base";
import { PurchaseInvoiceAdvance } from "./base/PurchaseInvoiceAdvance";
import { PurchaseInvoiceAdvanceService } from "./purchaseInvoiceAdvance.service";

@graphql.Resolver(() => PurchaseInvoiceAdvance)
export class PurchaseInvoiceAdvanceResolver extends PurchaseInvoiceAdvanceResolverBase {
  constructor(protected readonly service: PurchaseInvoiceAdvanceService) {
    super(service);
  }
}
