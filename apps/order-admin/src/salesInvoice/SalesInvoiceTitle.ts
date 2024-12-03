import { SalesInvoice as TSalesInvoice } from "../api/salesInvoice/SalesInvoice";

export const SALESINVOICE_TITLE_FIELD = "customerName";

export const SalesInvoiceTitle = (record: TSalesInvoice): string => {
  return record.customerName?.toString() || String(record.id);
};
