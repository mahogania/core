import * as graphql from "@nestjs/graphql";
import { LandedCostTaxesAndChargesResolverBase } from "./base/landedCostTaxesAndCharges.resolver.base";
import { LandedCostTaxesAndCharges } from "./base/LandedCostTaxesAndCharges";
import { LandedCostTaxesAndChargesService } from "./landedCostTaxesAndCharges.service";

@graphql.Resolver(() => LandedCostTaxesAndCharges)
export class LandedCostTaxesAndChargesResolver extends LandedCostTaxesAndChargesResolverBase {
  constructor(protected readonly service: LandedCostTaxesAndChargesService) {
    super(service);
  }
}
