import { PurchaseOrderItem as TPurchaseOrderItem } from "../api/purchaseOrderItem/PurchaseOrderItem";

export const PURCHASEORDERITEM_TITLE_FIELD = "itemName";

export const PurchaseOrderItemTitle = (record: TPurchaseOrderItem): string => {
  return record.itemName?.toString() || String(record.id);
};
