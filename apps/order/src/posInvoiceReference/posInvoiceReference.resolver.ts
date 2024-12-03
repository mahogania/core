import * as graphql from "@nestjs/graphql";
import { PosInvoiceReferenceResolverBase } from "./base/posInvoiceReference.resolver.base";
import { PosInvoiceReference } from "./base/PosInvoiceReference";
import { PosInvoiceReferenceService } from "./posInvoiceReference.service";

@graphql.Resolver(() => PosInvoiceReference)
export class PosInvoiceReferenceResolver extends PosInvoiceReferenceResolverBase {
  constructor(protected readonly service: PosInvoiceReferenceService) {
    super(service);
  }
}
