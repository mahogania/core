import { Module } from "@nestjs/common";
import { ShippingRuleCountryModuleBase } from "./base/shippingRuleCountry.module.base";
import { ShippingRuleCountryService } from "./shippingRuleCountry.service";
import { ShippingRuleCountryController } from "./shippingRuleCountry.controller";
import { ShippingRuleCountryGrpcController } from "./shippingRuleCountry.grpc.controller";
import { ShippingRuleCountryResolver } from "./shippingRuleCountry.resolver";

@Module({
  imports: [ShippingRuleCountryModuleBase],
  controllers: [
    ShippingRuleCountryController,
    ShippingRuleCountryGrpcController,
  ],
  providers: [ShippingRuleCountryService, ShippingRuleCountryResolver],
  exports: [ShippingRuleCountryService],
})
export class ShippingRuleCountryModule {}
