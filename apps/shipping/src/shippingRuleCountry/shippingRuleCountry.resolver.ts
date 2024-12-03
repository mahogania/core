import * as graphql from "@nestjs/graphql";
import { ShippingRuleCountryResolverBase } from "./base/shippingRuleCountry.resolver.base";
import { ShippingRuleCountry } from "./base/ShippingRuleCountry";
import { ShippingRuleCountryService } from "./shippingRuleCountry.service";

@graphql.Resolver(() => ShippingRuleCountry)
export class ShippingRuleCountryResolver extends ShippingRuleCountryResolverBase {
  constructor(protected readonly service: ShippingRuleCountryService) {
    super(service);
  }
}
