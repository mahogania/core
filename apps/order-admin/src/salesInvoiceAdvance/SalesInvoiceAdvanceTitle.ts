import { SalesInvoiceAdvance as TSalesInvoiceAdvance } from "../api/salesInvoiceAdvance/SalesInvoiceAdvance";

export const SALESINVOICEADVANCE_TITLE_FIELD = "name";

export const SalesInvoiceAdvanceTitle = (
  record: TSalesInvoiceAdvance
): string => {
  return record.name?.toString() || String(record.id);
};
