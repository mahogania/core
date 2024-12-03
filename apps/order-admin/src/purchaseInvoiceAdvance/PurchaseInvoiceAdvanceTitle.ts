import { PurchaseInvoiceAdvance as TPurchaseInvoiceAdvance } from "../api/purchaseInvoiceAdvance/PurchaseInvoiceAdvance";

export const PURCHASEINVOICEADVANCE_TITLE_FIELD = "name";

export const PurchaseInvoiceAdvanceTitle = (
  record: TPurchaseInvoiceAdvance
): string => {
  return record.name?.toString() || String(record.id);
};
