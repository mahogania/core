import * as graphql from "@nestjs/graphql";
import { CurrencyExchangeSettingsDetailsResolverBase } from "./base/currencyExchangeSettingsDetails.resolver.base";
import { CurrencyExchangeSettingsDetails } from "./base/CurrencyExchangeSettingsDetails";
import { CurrencyExchangeSettingsDetailsService } from "./currencyExchangeSettingsDetails.service";

@graphql.Resolver(() => CurrencyExchangeSettingsDetails)
export class CurrencyExchangeSettingsDetailsResolver extends CurrencyExchangeSettingsDetailsResolverBase {
  constructor(
    protected readonly service: CurrencyExchangeSettingsDetailsService
  ) {
    super(service);
  }
}
