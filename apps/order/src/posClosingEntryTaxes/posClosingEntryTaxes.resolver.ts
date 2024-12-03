import * as graphql from "@nestjs/graphql";
import { PosClosingEntryTaxesResolverBase } from "./base/posClosingEntryTaxes.resolver.base";
import { PosClosingEntryTaxes } from "./base/PosClosingEntryTaxes";
import { PosClosingEntryTaxesService } from "./posClosingEntryTaxes.service";

@graphql.Resolver(() => PosClosingEntryTaxes)
export class PosClosingEntryTaxesResolver extends PosClosingEntryTaxesResolverBase {
  constructor(protected readonly service: PosClosingEntryTaxesService) {
    super(service);
  }
}
