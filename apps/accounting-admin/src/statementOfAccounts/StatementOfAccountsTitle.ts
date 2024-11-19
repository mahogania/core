import { StatementOfAccounts as TStatementOfAccounts } from "../api/statementOfAccounts/StatementOfAccounts";

export const STATEMENTOFACCOUNTS_TITLE_FIELD = "collectionName";

export const StatementOfAccountsTitle = (
  record: TStatementOfAccounts
): string => {
  return record.collectionName?.toString() || String(record.id);
};
