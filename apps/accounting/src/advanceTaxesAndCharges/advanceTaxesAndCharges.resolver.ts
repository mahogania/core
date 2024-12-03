import * as graphql from "@nestjs/graphql";
import { AdvanceTaxesAndChargesResolverBase } from "./base/advanceTaxesAndCharges.resolver.base";
import { AdvanceTaxesAndCharges } from "./base/AdvanceTaxesAndCharges";
import { AdvanceTaxesAndChargesService } from "./advanceTaxesAndCharges.service";

@graphql.Resolver(() => AdvanceTaxesAndCharges)
export class AdvanceTaxesAndChargesResolver extends AdvanceTaxesAndChargesResolverBase {
  constructor(protected readonly service: AdvanceTaxesAndChargesService) {
    super(service);
  }
}
