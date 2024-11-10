import * as graphql from "@nestjs/graphql";
import { AdvanceTaxResolverBase } from "./base/advanceTax.resolver.base";
import { AdvanceTax } from "./base/AdvanceTax";
import { AdvanceTaxService } from "./advanceTax.service";

@graphql.Resolver(() => AdvanceTax)
export class AdvanceTaxResolver extends AdvanceTaxResolverBase {
  constructor(protected readonly service: AdvanceTaxService) {
    super(service);
  }
}
