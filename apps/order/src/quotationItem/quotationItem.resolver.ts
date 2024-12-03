import * as graphql from "@nestjs/graphql";
import { QuotationItemResolverBase } from "./base/quotationItem.resolver.base";
import { QuotationItem } from "./base/QuotationItem";
import { QuotationItemService } from "./quotationItem.service";

@graphql.Resolver(() => QuotationItem)
export class QuotationItemResolver extends QuotationItemResolverBase {
  constructor(protected readonly service: QuotationItemService) {
    super(service);
  }
}
