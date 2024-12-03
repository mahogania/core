import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShippingRuleCountryService } from "./shippingRuleCountry.service";
import { ShippingRuleCountryControllerBase } from "./base/shippingRuleCountry.controller.base";

@swagger.ApiTags("shippingRuleCountries")
@common.Controller("shippingRuleCountries")
export class ShippingRuleCountryController extends ShippingRuleCountryControllerBase {
  constructor(protected readonly service: ShippingRuleCountryService) {
    super(service);
  }
}
