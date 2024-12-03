import * as graphql from "@nestjs/graphql";
import { SubscriptionPlanDetailResolverBase } from "./base/subscriptionPlanDetail.resolver.base";
import { SubscriptionPlanDetail } from "./base/SubscriptionPlanDetail";
import { SubscriptionPlanDetailService } from "./subscriptionPlanDetail.service";

@graphql.Resolver(() => SubscriptionPlanDetail)
export class SubscriptionPlanDetailResolver extends SubscriptionPlanDetailResolverBase {
  constructor(protected readonly service: SubscriptionPlanDetailService) {
    super(service);
  }
}
