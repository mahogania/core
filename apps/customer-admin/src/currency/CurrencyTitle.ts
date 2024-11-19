import { Currency as TCurrency } from "../api/currency/Currency";

export const CURRENCY_TITLE_FIELD = "currencyName";

export const CurrencyTitle = (record: TCurrency): string => {
  return record.currencyName?.toString() || String(record.id);
};
