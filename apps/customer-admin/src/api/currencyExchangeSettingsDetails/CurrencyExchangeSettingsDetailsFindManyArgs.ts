import { CurrencyExchangeSettingsDetailsWhereInput } from "./CurrencyExchangeSettingsDetailsWhereInput";
import { CurrencyExchangeSettingsDetailsOrderByInput } from "./CurrencyExchangeSettingsDetailsOrderByInput";

export type CurrencyExchangeSettingsDetailsFindManyArgs = {
  where?: CurrencyExchangeSettingsDetailsWhereInput;
  orderBy?: Array<CurrencyExchangeSettingsDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
