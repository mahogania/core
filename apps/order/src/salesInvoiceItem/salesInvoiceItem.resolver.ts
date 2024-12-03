import * as graphql from "@nestjs/graphql";
import { SalesInvoiceItemResolverBase } from "./base/salesInvoiceItem.resolver.base";
import { SalesInvoiceItem } from "./base/SalesInvoiceItem";
import { SalesInvoiceItemService } from "./salesInvoiceItem.service";

@graphql.Resolver(() => SalesInvoiceItem)
export class SalesInvoiceItemResolver extends SalesInvoiceItemResolverBase {
  constructor(protected readonly service: SalesInvoiceItemService) {
    super(service);
  }
}
