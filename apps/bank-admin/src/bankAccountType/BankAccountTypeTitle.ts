import { BankAccountType as TBankAccountType } from "../api/bankAccountType/BankAccountType";

export const BANKACCOUNTTYPE_TITLE_FIELD = "name";

export const BankAccountTypeTitle = (record: TBankAccountType): string => {
  return record.name?.toString() || String(record.id);
};
