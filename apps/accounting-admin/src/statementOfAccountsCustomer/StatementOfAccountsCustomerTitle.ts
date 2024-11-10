import { StatementOfAccountsCustomer as TStatementOfAccountsCustomer } from "../api/statementOfAccountsCustomer/StatementOfAccountsCustomer";

export const STATEMENTOFACCOUNTSCUSTOMER_TITLE_FIELD = "customerName";

export const StatementOfAccountsCustomerTitle = (
  record: TStatementOfAccountsCustomer
): string => {
  return record.customerName?.toString() || String(record.id);
};
