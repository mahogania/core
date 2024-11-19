import { PosInvoice as TPosInvoice } from "../api/posInvoice/PosInvoice";

export const POSINVOICE_TITLE_FIELD = "customerName";

export const PosInvoiceTitle = (record: TPosInvoice): string => {
  return record.customerName?.toString() || String(record.id);
};
