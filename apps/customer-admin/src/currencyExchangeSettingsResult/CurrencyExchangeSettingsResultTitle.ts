import { CurrencyExchangeSettingsResult as TCurrencyExchangeSettingsResult } from "../api/currencyExchangeSettingsResult/CurrencyExchangeSettingsResult";

export const CURRENCYEXCHANGESETTINGSRESULT_TITLE_FIELD = "name";

export const CurrencyExchangeSettingsResultTitle = (
  record: TCurrencyExchangeSettingsResult
): string => {
  return record.name?.toString() || String(record.id);
};
