import { CompanyHistory as TCompanyHistory } from "../api/companyHistory/CompanyHistory";

export const COMPANYHISTORY_TITLE_FIELD = "modifiedBy";

export const CompanyHistoryTitle = (record: TCompanyHistory): string => {
  return record.modifiedBy?.toString() || String(record.id);
};
