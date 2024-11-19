import { BankAccountSubtype as TBankAccountSubtype } from "../api/bankAccountSubtype/BankAccountSubtype";

export const BANKACCOUNTSUBTYPE_TITLE_FIELD = "name";

export const BankAccountSubtypeTitle = (
  record: TBankAccountSubtype
): string => {
  return record.name?.toString() || String(record.id);
};
