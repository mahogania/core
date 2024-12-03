import { AccountingDimension as TAccountingDimension } from "../api/accountingDimension/AccountingDimension";

export const ACCOUNTINGDIMENSION_TITLE_FIELD = "fieldname";

export const AccountingDimensionTitle = (
  record: TAccountingDimension
): string => {
  return record.fieldname?.toString() || String(record.id);
};
