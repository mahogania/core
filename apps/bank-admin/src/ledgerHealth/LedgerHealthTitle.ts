import { LedgerHealth as TLedgerHealth } from "../api/ledgerHealth/LedgerHealth";

export const LEDGERHEALTH_TITLE_FIELD = "name";

export const LedgerHealthTitle = (record: TLedgerHealth): string => {
  return record.name?.toString() || String(record.id);
};
