import { SalesInvoiceItem as TSalesInvoiceItem } from "../api/salesInvoiceItem/SalesInvoiceItem";

export const SALESINVOICEITEM_TITLE_FIELD = "itemName";

export const SalesInvoiceItemTitle = (record: TSalesInvoiceItem): string => {
  return record.itemName?.toString() || String(record.id);
};
