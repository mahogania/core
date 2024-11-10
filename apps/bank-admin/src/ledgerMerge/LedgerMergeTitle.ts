import { LedgerMerge as TLedgerMerge } from "../api/ledgerMerge/LedgerMerge";

export const LEDGERMERGE_TITLE_FIELD = "accountName";

export const LedgerMergeTitle = (record: TLedgerMerge): string => {
  return record.accountName?.toString() || String(record.id);
};
