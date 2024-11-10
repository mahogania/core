import { AccountingDimensionDetail as TAccountingDimensionDetail } from "../api/accountingDimensionDetail/AccountingDimensionDetail";

export const ACCOUNTINGDIMENSIONDETAIL_TITLE_FIELD = "name";

export const AccountingDimensionDetailTitle = (
  record: TAccountingDimensionDetail
): string => {
  return record.name?.toString() || String(record.id);
};
