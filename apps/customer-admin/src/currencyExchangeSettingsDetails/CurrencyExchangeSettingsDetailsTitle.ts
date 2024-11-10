import { CurrencyExchangeSettingsDetails as TCurrencyExchangeSettingsDetails } from "../api/currencyExchangeSettingsDetails/CurrencyExchangeSettingsDetails";

export const CURRENCYEXCHANGESETTINGSDETAILS_TITLE_FIELD = "name";

export const CurrencyExchangeSettingsDetailsTitle = (
  record: TCurrencyExchangeSettingsDetails
): string => {
  return record.name?.toString() || String(record.id);
};
