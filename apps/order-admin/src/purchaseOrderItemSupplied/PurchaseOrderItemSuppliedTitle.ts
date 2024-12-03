import { PurchaseOrderItemSupplied as TPurchaseOrderItemSupplied } from "../api/purchaseOrderItemSupplied/PurchaseOrderItemSupplied";

export const PURCHASEORDERITEMSUPPLIED_TITLE_FIELD = "name";

export const PurchaseOrderItemSuppliedTitle = (
  record: TPurchaseOrderItemSupplied
): string => {
  return record.name?.toString() || String(record.id);
};
