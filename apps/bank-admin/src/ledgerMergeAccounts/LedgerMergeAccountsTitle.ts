import { LedgerMergeAccounts as TLedgerMergeAccounts } from "../api/ledgerMergeAccounts/LedgerMergeAccounts";

export const LEDGERMERGEACCOUNTS_TITLE_FIELD = "accountName";

export const LedgerMergeAccountsTitle = (
  record: TLedgerMergeAccounts
): string => {
  return record.accountName?.toString() || String(record.id);
};
