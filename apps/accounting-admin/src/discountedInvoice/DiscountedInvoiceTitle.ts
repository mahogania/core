import { DiscountedInvoice as TDiscountedInvoice } from "../api/discountedInvoice/DiscountedInvoice";

export const DISCOUNTEDINVOICE_TITLE_FIELD = "name";

export const DiscountedInvoiceTitle = (record: TDiscountedInvoice): string => {
  return record.name?.toString() || String(record.id);
};
