import { BankClearanceDetail as TBankClearanceDetail } from "../api/bankClearanceDetail/BankClearanceDetail";

export const BANKCLEARANCEDETAIL_TITLE_FIELD = "name";

export const BankClearanceDetailTitle = (
  record: TBankClearanceDetail
): string => {
  return record.name?.toString() || String(record.id);
};
