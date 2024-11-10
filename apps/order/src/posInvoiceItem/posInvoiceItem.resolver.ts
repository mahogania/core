import * as graphql from "@nestjs/graphql";
import { PosInvoiceItemResolverBase } from "./base/posInvoiceItem.resolver.base";
import { PosInvoiceItem } from "./base/PosInvoiceItem";
import { PosInvoiceItemService } from "./posInvoiceItem.service";

@graphql.Resolver(() => PosInvoiceItem)
export class PosInvoiceItemResolver extends PosInvoiceItemResolverBase {
  constructor(protected readonly service: PosInvoiceItemService) {
    super(service);
  }
}
