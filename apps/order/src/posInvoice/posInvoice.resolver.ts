import * as graphql from "@nestjs/graphql";
import { PosInvoiceResolverBase } from "./base/posInvoice.resolver.base";
import { PosInvoice } from "./base/PosInvoice";
import { PosInvoiceService } from "./posInvoice.service";

@graphql.Resolver(() => PosInvoice)
export class PosInvoiceResolver extends PosInvoiceResolverBase {
  constructor(protected readonly service: PosInvoiceService) {
    super(service);
  }
}
