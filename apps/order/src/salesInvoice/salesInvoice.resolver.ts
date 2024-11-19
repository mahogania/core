import * as graphql from "@nestjs/graphql";
import { SalesInvoiceResolverBase } from "./base/salesInvoice.resolver.base";
import { SalesInvoice } from "./base/SalesInvoice";
import { SalesInvoiceService } from "./salesInvoice.service";

@graphql.Resolver(() => SalesInvoice)
export class SalesInvoiceResolver extends SalesInvoiceResolverBase {
  constructor(protected readonly service: SalesInvoiceService) {
    super(service);
  }
}
