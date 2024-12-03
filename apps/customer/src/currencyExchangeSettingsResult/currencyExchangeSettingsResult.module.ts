import { Module } from "@nestjs/common";
import { CurrencyExchangeSettingsResultModuleBase } from "./base/currencyExchangeSettingsResult.module.base";
import { CurrencyExchangeSettingsResultService } from "./currencyExchangeSettingsResult.service";
import { CurrencyExchangeSettingsResultController } from "./currencyExchangeSettingsResult.controller";
import { CurrencyExchangeSettingsResultResolver } from "./currencyExchangeSettingsResult.resolver";

@Module({
  imports: [CurrencyExchangeSettingsResultModuleBase],
  controllers: [CurrencyExchangeSettingsResultController],
  providers: [
    CurrencyExchangeSettingsResultService,
    CurrencyExchangeSettingsResultResolver,
  ],
  exports: [CurrencyExchangeSettingsResultService],
})
export class CurrencyExchangeSettingsResultModule {}
