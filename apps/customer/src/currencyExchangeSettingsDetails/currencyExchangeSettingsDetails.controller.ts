import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CurrencyExchangeSettingsDetailsService } from "./currencyExchangeSettingsDetails.service";
import { CurrencyExchangeSettingsDetailsControllerBase } from "./base/currencyExchangeSettingsDetails.controller.base";

@swagger.ApiTags("currencyExchangeSettingsDetails")
@common.Controller("currencyExchangeSettingsDetails")
export class CurrencyExchangeSettingsDetailsController extends CurrencyExchangeSettingsDetailsControllerBase {
  constructor(
    protected readonly service: CurrencyExchangeSettingsDetailsService
  ) {
    super(service);
  }
}
