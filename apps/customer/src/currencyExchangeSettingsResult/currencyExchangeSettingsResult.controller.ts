import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CurrencyExchangeSettingsResultService } from "./currencyExchangeSettingsResult.service";
import { CurrencyExchangeSettingsResultControllerBase } from "./base/currencyExchangeSettingsResult.controller.base";

@swagger.ApiTags("currencyExchangeSettingsResults")
@common.Controller("currencyExchangeSettingsResults")
export class CurrencyExchangeSettingsResultController extends CurrencyExchangeSettingsResultControllerBase {
  constructor(
    protected readonly service: CurrencyExchangeSettingsResultService
  ) {
    super(service);
  }
}
