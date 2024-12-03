import { AccountClosingBalance as TAccountClosingBalance } from "../api/accountClosingBalance/AccountClosingBalance";

export const ACCOUNTCLOSINGBALANCE_TITLE_FIELD = "name";

export const AccountClosingBalanceTitle = (
  record: TAccountClosingBalance
): string => {
  return record.name?.toString() || String(record.id);
};
