import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CurrencyExchangeService } from "./currencyExchange.service";
import { CurrencyExchangeControllerBase } from "./base/currencyExchange.controller.base";

@swagger.ApiTags("currencyExchanges")
@common.Controller("currencyExchanges")
export class CurrencyExchangeController extends CurrencyExchangeControllerBase {
  constructor(protected readonly service: CurrencyExchangeService) {
    super(service);
  }
}
