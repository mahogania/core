import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShippingRuleCountryService } from "./shippingRuleCountry.service";
import { ShippingRuleCountryGrpcControllerBase } from "./base/shippingRuleCountry.grpc.controller.base";

@swagger.ApiTags("shippingRuleCountries")
@common.Controller("shippingRuleCountries")
export class ShippingRuleCountryGrpcController extends ShippingRuleCountryGrpcControllerBase {
  constructor(protected readonly service: ShippingRuleCountryService) {
    super(service);
  }
}
