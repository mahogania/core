import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShippingRuleConditionService } from "./shippingRuleCondition.service";
import { ShippingRuleConditionGrpcControllerBase } from "./base/shippingRuleCondition.grpc.controller.base";

@swagger.ApiTags("shippingRuleConditions")
@common.Controller("shippingRuleConditions")
export class ShippingRuleConditionGrpcController extends ShippingRuleConditionGrpcControllerBase {
  constructor(protected readonly service: ShippingRuleConditionService) {
    super(service);
  }
}
