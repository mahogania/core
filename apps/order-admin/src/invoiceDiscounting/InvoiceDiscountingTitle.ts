import { InvoiceDiscounting as TInvoiceDiscounting } from "../api/invoiceDiscounting/InvoiceDiscounting";

export const INVOICEDISCOUNTING_TITLE_FIELD = "name";

export const InvoiceDiscountingTitle = (
  record: TInvoiceDiscounting
): string => {
  return record.name?.toString() || String(record.id);
};
