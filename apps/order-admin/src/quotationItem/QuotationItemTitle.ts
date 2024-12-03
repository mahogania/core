import { QuotationItem as TQuotationItem } from "../api/quotationItem/QuotationItem";

export const QUOTATIONITEM_TITLE_FIELD = "itemName";

export const QuotationItemTitle = (record: TQuotationItem): string => {
  return record.itemName?.toString() || String(record.id);
};
