import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubscriptionPlanDetailService } from "./subscriptionPlanDetail.service";
import { SubscriptionPlanDetailControllerBase } from "./base/subscriptionPlanDetail.controller.base";

@swagger.ApiTags("subscriptionPlanDetails")
@common.Controller("subscriptionPlanDetails")
export class SubscriptionPlanDetailController extends SubscriptionPlanDetailControllerBase {
  constructor(protected readonly service: SubscriptionPlanDetailService) {
    super(service);
  }
}
