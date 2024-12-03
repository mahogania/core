import { LedgerHealthMonitorCompany as TLedgerHealthMonitorCompany } from "../api/ledgerHealthMonitorCompany/LedgerHealthMonitorCompany";

export const LEDGERHEALTHMONITORCOMPANY_TITLE_FIELD = "name";

export const LedgerHealthMonitorCompanyTitle = (
  record: TLedgerHealthMonitorCompany
): string => {
  return record.name?.toString() || String(record.id);
};
