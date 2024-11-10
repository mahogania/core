import * as graphql from "@nestjs/graphql";
import { SalesInvoicePaymentResolverBase } from "./base/salesInvoicePayment.resolver.base";
import { SalesInvoicePayment } from "./base/SalesInvoicePayment";
import { SalesInvoicePaymentService } from "./salesInvoicePayment.service";

@graphql.Resolver(() => SalesInvoicePayment)
export class SalesInvoicePaymentResolver extends SalesInvoicePaymentResolverBase {
  constructor(protected readonly service: SalesInvoicePaymentService) {
    super(service);
  }
}
