import { FiscalYearCompany as TFiscalYearCompany } from "../api/fiscalYearCompany/FiscalYearCompany";

export const FISCALYEARCOMPANY_TITLE_FIELD = "name";

export const FiscalYearCompanyTitle = (record: TFiscalYearCompany): string => {
  return record.name?.toString() || String(record.id);
};
