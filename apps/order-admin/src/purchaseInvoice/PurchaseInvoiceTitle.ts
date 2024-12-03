import { PurchaseInvoice as TPurchaseInvoice } from "../api/purchaseInvoice/PurchaseInvoice";

export const PURCHASEINVOICE_TITLE_FIELD = "name";

export const PurchaseInvoiceTitle = (record: TPurchaseInvoice): string => {
  return record.name?.toString() || String(record.id);
};
