import { BankTransaction as TBankTransaction } from "../api/bankTransaction/BankTransaction";

export const BANKTRANSACTION_TITLE_FIELD = "bankPartyName";

export const BankTransactionTitle = (record: TBankTransaction): string => {
  return record.bankPartyName?.toString() || String(record.id);
};
