import { PurchaseOrder as TPurchaseOrder } from "../api/purchaseOrder/PurchaseOrder";

export const PURCHASEORDER_TITLE_FIELD = "customerName";

export const PurchaseOrderTitle = (record: TPurchaseOrder): string => {
  return record.customerName?.toString() || String(record.id);
};
