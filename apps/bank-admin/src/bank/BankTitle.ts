import { Bank as TBank } from "../api/bank/Bank";

export const BANK_TITLE_FIELD = "bankName";

export const BankTitle = (record: TBank): string => {
  return record.bankName?.toString() || String(record.id);
};
