import { Discount as TDiscount } from "../api/discount/Discount";

export const DISCOUNT_TITLE_FIELD = "discountRuleUrl";

export const DiscountTitle = (record: TDiscount): string => {
  return record.discountRuleUrl?.toString() || String(record.id);
};
