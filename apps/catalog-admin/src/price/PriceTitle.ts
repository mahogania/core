import { Price as TPrice } from "../api/price/Price";

export const PRICE_TITLE_FIELD = "priceRuleUrl";

export const PriceTitle = (record: TPrice): string => {
  return record.priceRuleUrl?.toString() || String(record.id);
};
