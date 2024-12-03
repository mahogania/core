import * as graphql from "@nestjs/graphql";
import { PurchaseInvoiceItemResolverBase } from "./base/purchaseInvoiceItem.resolver.base";
import { PurchaseInvoiceItem } from "./base/PurchaseInvoiceItem";
import { PurchaseInvoiceItemService } from "./purchaseInvoiceItem.service";

@graphql.Resolver(() => PurchaseInvoiceItem)
export class PurchaseInvoiceItemResolver extends PurchaseInvoiceItemResolverBase {
  constructor(protected readonly service: PurchaseInvoiceItemService) {
    super(service);
  }
}
