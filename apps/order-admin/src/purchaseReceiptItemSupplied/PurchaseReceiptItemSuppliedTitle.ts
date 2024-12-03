import { PurchaseReceiptItemSupplied as TPurchaseReceiptItemSupplied } from "../api/purchaseReceiptItemSupplied/PurchaseReceiptItemSupplied";

export const PURCHASERECEIPTITEMSUPPLIED_TITLE_FIELD = "itemName";

export const PurchaseReceiptItemSuppliedTitle = (
  record: TPurchaseReceiptItemSupplied
): string => {
  return record.itemName?.toString() || String(record.id);
};
