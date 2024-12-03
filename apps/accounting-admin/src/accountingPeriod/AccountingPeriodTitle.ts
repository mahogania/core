import { AccountingPeriod as TAccountingPeriod } from "../api/accountingPeriod/AccountingPeriod";

export const ACCOUNTINGPERIOD_TITLE_FIELD = "name";

export const AccountingPeriodTitle = (record: TAccountingPeriod): string => {
  return record.name?.toString() || String(record.id);
};
