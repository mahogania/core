import { SalesInvoicePayment as TSalesInvoicePayment } from "../api/salesInvoicePayment/SalesInvoicePayment";

export const SALESINVOICEPAYMENT_TITLE_FIELD = "name";

export const SalesInvoicePaymentTitle = (
  record: TSalesInvoicePayment
): string => {
  return record.name?.toString() || String(record.id);
};
