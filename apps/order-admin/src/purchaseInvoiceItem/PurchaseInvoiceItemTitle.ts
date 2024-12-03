import { PurchaseInvoiceItem as TPurchaseInvoiceItem } from "../api/purchaseInvoiceItem/PurchaseInvoiceItem";

export const PURCHASEINVOICEITEM_TITLE_FIELD = "itemName";

export const PurchaseInvoiceItemTitle = (
  record: TPurchaseInvoiceItem
): string => {
  return record.itemName?.toString() || String(record.id);
};
