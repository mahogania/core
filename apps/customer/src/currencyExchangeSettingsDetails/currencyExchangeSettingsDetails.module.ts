import { Module } from "@nestjs/common";
import { CurrencyExchangeSettingsDetailsModuleBase } from "./base/currencyExchangeSettingsDetails.module.base";
import { CurrencyExchangeSettingsDetailsService } from "./currencyExchangeSettingsDetails.service";
import { CurrencyExchangeSettingsDetailsController } from "./currencyExchangeSettingsDetails.controller";
import { CurrencyExchangeSettingsDetailsResolver } from "./currencyExchangeSettingsDetails.resolver";

@Module({
  imports: [CurrencyExchangeSettingsDetailsModuleBase],
  controllers: [CurrencyExchangeSettingsDetailsController],
  providers: [
    CurrencyExchangeSettingsDetailsService,
    CurrencyExchangeSettingsDetailsResolver,
  ],
  exports: [CurrencyExchangeSettingsDetailsService],
})
export class CurrencyExchangeSettingsDetailsModule {}
