import * as graphql from "@nestjs/graphql";
import { CurrencyExchangeSettingsResultResolverBase } from "./base/currencyExchangeSettingsResult.resolver.base";
import { CurrencyExchangeSettingsResult } from "./base/CurrencyExchangeSettingsResult";
import { CurrencyExchangeSettingsResultService } from "./currencyExchangeSettingsResult.service";

@graphql.Resolver(() => CurrencyExchangeSettingsResult)
export class CurrencyExchangeSettingsResultResolver extends CurrencyExchangeSettingsResultResolverBase {
  constructor(
    protected readonly service: CurrencyExchangeSettingsResultService
  ) {
    super(service);
  }
}
