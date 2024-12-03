import { QuotationLostReasonDetail as TQuotationLostReasonDetail } from "../api/quotationLostReasonDetail/QuotationLostReasonDetail";

export const QUOTATIONLOSTREASONDETAIL_TITLE_FIELD = "name";

export const QuotationLostReasonDetailTitle = (
  record: TQuotationLostReasonDetail
): string => {
  return record.name?.toString() || String(record.id);
};
