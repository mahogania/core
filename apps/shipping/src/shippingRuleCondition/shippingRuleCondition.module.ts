import { Module } from "@nestjs/common";
import { ShippingRuleConditionModuleBase } from "./base/shippingRuleCondition.module.base";
import { ShippingRuleConditionService } from "./shippingRuleCondition.service";
import { ShippingRuleConditionController } from "./shippingRuleCondition.controller";
import { ShippingRuleConditionGrpcController } from "./shippingRuleCondition.grpc.controller";
import { ShippingRuleConditionResolver } from "./shippingRuleCondition.resolver";

@Module({
  imports: [ShippingRuleConditionModuleBase],
  controllers: [
    ShippingRuleConditionController,
    ShippingRuleConditionGrpcController,
  ],
  providers: [ShippingRuleConditionService, ShippingRuleConditionResolver],
  exports: [ShippingRuleConditionService],
})
export class ShippingRuleConditionModule {}
