import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShippingRuleService } from "./shippingRule.service";
import { ShippingRuleControllerBase } from "./base/shippingRule.controller.base";

@swagger.ApiTags("shippingRules")
@common.Controller("shippingRules")
export class ShippingRuleController extends ShippingRuleControllerBase {
  constructor(protected readonly service: ShippingRuleService) {
    super(service);
  }
}
