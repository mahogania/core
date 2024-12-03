import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShippingRuleService } from "./shippingRule.service";
import { ShippingRuleGrpcControllerBase } from "./base/shippingRule.grpc.controller.base";

@swagger.ApiTags("shippingRules")
@common.Controller("shippingRules")
export class ShippingRuleGrpcController extends ShippingRuleGrpcControllerBase {
  constructor(protected readonly service: ShippingRuleService) {
    super(service);
  }
}
