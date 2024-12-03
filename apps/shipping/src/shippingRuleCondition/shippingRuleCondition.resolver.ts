import * as graphql from "@nestjs/graphql";
import { ShippingRuleConditionResolverBase } from "./base/shippingRuleCondition.resolver.base";
import { ShippingRuleCondition } from "./base/ShippingRuleCondition";
import { ShippingRuleConditionService } from "./shippingRuleCondition.service";

@graphql.Resolver(() => ShippingRuleCondition)
export class ShippingRuleConditionResolver extends ShippingRuleConditionResolverBase {
  constructor(protected readonly service: ShippingRuleConditionService) {
    super(service);
  }
}
