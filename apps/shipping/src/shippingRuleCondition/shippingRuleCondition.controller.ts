import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShippingRuleConditionService } from "./shippingRuleCondition.service";
import { ShippingRuleConditionControllerBase } from "./base/shippingRuleCondition.controller.base";

@swagger.ApiTags("shippingRuleConditions")
@common.Controller("shippingRuleConditions")
export class ShippingRuleConditionController extends ShippingRuleConditionControllerBase {
  constructor(protected readonly service: ShippingRuleConditionService) {
    super(service);
  }
}
