import { CurrencyExchange as TCurrencyExchange } from "../api/currencyExchange/CurrencyExchange";

export const CURRENCYEXCHANGE_TITLE_FIELD = "name";

export const CurrencyExchangeTitle = (record: TCurrencyExchange): string => {
  return record.name?.toString() || String(record.id);
};
