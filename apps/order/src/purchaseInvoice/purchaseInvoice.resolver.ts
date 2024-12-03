import * as graphql from "@nestjs/graphql";
import { PurchaseInvoiceResolverBase } from "./base/purchaseInvoice.resolver.base";
import { PurchaseInvoice } from "./base/PurchaseInvoice";
import { PurchaseInvoiceService } from "./purchaseInvoice.service";

@graphql.Resolver(() => PurchaseInvoice)
export class PurchaseInvoiceResolver extends PurchaseInvoiceResolverBase {
  constructor(protected readonly service: PurchaseInvoiceService) {
    super(service);
  }
}
