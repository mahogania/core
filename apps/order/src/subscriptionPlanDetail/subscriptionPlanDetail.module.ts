import { Module } from "@nestjs/common";
import { SubscriptionPlanDetailModuleBase } from "./base/subscriptionPlanDetail.module.base";
import { SubscriptionPlanDetailService } from "./subscriptionPlanDetail.service";
import { SubscriptionPlanDetailController } from "./subscriptionPlanDetail.controller";
import { SubscriptionPlanDetailResolver } from "./subscriptionPlanDetail.resolver";

@Module({
  imports: [SubscriptionPlanDetailModuleBase],
  controllers: [SubscriptionPlanDetailController],
  providers: [SubscriptionPlanDetailService, SubscriptionPlanDetailResolver],
  exports: [SubscriptionPlanDetailService],
})
export class SubscriptionPlanDetailModule {}
