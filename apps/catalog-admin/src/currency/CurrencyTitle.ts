import { Currency as TCurrency } from "../api/currency/Currency";

export const CURRENCY_TITLE_FIELD = "symbolField";

export const CurrencyTitle = (record: TCurrency): string => {
  return record.symbolField?.toString() || String(record.id);
};
