import { BankAccount as TBankAccount } from "../api/bankAccount/BankAccount";

export const BANKACCOUNT_TITLE_FIELD = "accountName";

export const BankAccountTitle = (record: TBankAccount): string => {
  return record.accountName?.toString() || String(record.id);
};
