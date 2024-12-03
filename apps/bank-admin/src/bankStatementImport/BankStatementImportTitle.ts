import { BankStatementImport as TBankStatementImport } from "../api/bankStatementImport/BankStatementImport";

export const BANKSTATEMENTIMPORT_TITLE_FIELD = "name";

export const BankStatementImportTitle = (
  record: TBankStatementImport
): string => {
  return record.name?.toString() || String(record.id);
};
