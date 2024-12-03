import { Module } from "@nestjs/common";
import { ShippingRuleModuleBase } from "./base/shippingRule.module.base";
import { ShippingRuleService } from "./shippingRule.service";
import { ShippingRuleController } from "./shippingRule.controller";
import { ShippingRuleGrpcController } from "./shippingRule.grpc.controller";
import { ShippingRuleResolver } from "./shippingRule.resolver";

@Module({
  imports: [ShippingRuleModuleBase],
  controllers: [ShippingRuleController, ShippingRuleGrpcController],
  providers: [ShippingRuleService, ShippingRuleResolver],
  exports: [ShippingRuleService],
})
export class ShippingRuleModule {}
