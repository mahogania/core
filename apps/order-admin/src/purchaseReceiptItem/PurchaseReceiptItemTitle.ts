import { PurchaseReceiptItem as TPurchaseReceiptItem } from "../api/purchaseReceiptItem/PurchaseReceiptItem";

export const PURCHASERECEIPTITEM_TITLE_FIELD = "itemName";

export const PurchaseReceiptItemTitle = (
  record: TPurchaseReceiptItem
): string => {
  return record.itemName?.toString() || String(record.id);
};
