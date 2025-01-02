import * as graphql from "@nestjs/graphql";
import { ClreDedTaxResolverBase } from "./base/clreDedTax.resolver.base";
import { ClreDedTax } from "./base/ClreDedTax";
import { ClreDedTaxService } from "./clreDedTax.service";

@graphql.Resolver(() => ClreDedTax)
export class ClreDedTaxResolver extends ClreDedTaxResolverBase {
  constructor(protected readonly service: ClreDedTaxService) {
    super(service);
  }
}
