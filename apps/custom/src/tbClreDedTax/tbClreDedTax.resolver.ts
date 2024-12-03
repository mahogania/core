import * as graphql from "@nestjs/graphql";
import { TbClreDedTaxResolverBase } from "./base/tbClreDedTax.resolver.base";
import { TbClreDedTax } from "./base/TbClreDedTax";
import { TbClreDedTaxService } from "./tbClreDedTax.service";

@graphql.Resolver(() => TbClreDedTax)
export class TbClreDedTaxResolver extends TbClreDedTaxResolverBase {
  constructor(protected readonly service: TbClreDedTaxService) {
    super(service);
  }
}
