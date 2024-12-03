import * as graphql from "@nestjs/graphql";
import { CurrencyExchangeResolverBase } from "./base/currencyExchange.resolver.base";
import { CurrencyExchange } from "./base/CurrencyExchange";
import { CurrencyExchangeService } from "./currencyExchange.service";

@graphql.Resolver(() => CurrencyExchange)
export class CurrencyExchangeResolver extends CurrencyExchangeResolverBase {
  constructor(protected readonly service: CurrencyExchangeService) {
    super(service);
  }
}
