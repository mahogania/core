import { PosInvoiceReference as TPosInvoiceReference } from "../api/posInvoiceReference/PosInvoiceReference";

export const POSINVOICEREFERENCE_TITLE_FIELD = "name";

export const PosInvoiceReferenceTitle = (
  record: TPosInvoiceReference
): string => {
  return record.name?.toString() || String(record.id);
};
