import * as graphql from "@nestjs/graphql";
import { ShippingRuleResolverBase } from "./base/shippingRule.resolver.base";
import { ShippingRule } from "./base/ShippingRule";
import { ShippingRuleService } from "./shippingRule.service";

@graphql.Resolver(() => ShippingRule)
export class ShippingRuleResolver extends ShippingRuleResolverBase {
  constructor(protected readonly service: ShippingRuleService) {
    super(service);
  }
}
