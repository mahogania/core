import { FiscalYear as TFiscalYear } from "../api/fiscalYear/FiscalYear";

export const FISCALYEAR_TITLE_FIELD = "name";

export const FiscalYearTitle = (record: TFiscalYear): string => {
  return record.name?.toString() || String(record.id);
};
