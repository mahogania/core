import * as graphql from "@nestjs/graphql";
import { SalesInvoiceAdvanceResolverBase } from "./base/salesInvoiceAdvance.resolver.base";
import { SalesInvoiceAdvance } from "./base/SalesInvoiceAdvance";
import { SalesInvoiceAdvanceService } from "./salesInvoiceAdvance.service";

@graphql.Resolver(() => SalesInvoiceAdvance)
export class SalesInvoiceAdvanceResolver extends SalesInvoiceAdvanceResolverBase {
  constructor(protected readonly service: SalesInvoiceAdvanceService) {
    super(service);
  }
}
