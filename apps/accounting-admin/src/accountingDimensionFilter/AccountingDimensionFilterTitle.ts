import { AccountingDimensionFilter as TAccountingDimensionFilter } from "../api/accountingDimensionFilter/AccountingDimensionFilter";

export const ACCOUNTINGDIMENSIONFILTER_TITLE_FIELD = "name";

export const AccountingDimensionFilterTitle = (
  record: TAccountingDimensionFilter
): string => {
  return record.name?.toString() || String(record.id);
};
