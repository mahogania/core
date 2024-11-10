import { Quotation as TQuotation } from "../api/quotation/Quotation";

export const QUOTATION_TITLE_FIELD = "customerName";

export const QuotationTitle = (record: TQuotation): string => {
  return record.customerName?.toString() || String(record.id);
};
