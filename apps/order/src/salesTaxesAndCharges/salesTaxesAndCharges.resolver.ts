import * as graphql from "@nestjs/graphql";
import { SalesTaxesAndChargesResolverBase } from "./base/salesTaxesAndCharges.resolver.base";
import { SalesTaxesAndCharges } from "./base/SalesTaxesAndCharges";
import { SalesTaxesAndChargesService } from "./salesTaxesAndCharges.service";

@graphql.Resolver(() => SalesTaxesAndCharges)
export class SalesTaxesAndChargesResolver extends SalesTaxesAndChargesResolverBase {
  constructor(protected readonly service: SalesTaxesAndChargesService) {
    super(service);
  }
}
