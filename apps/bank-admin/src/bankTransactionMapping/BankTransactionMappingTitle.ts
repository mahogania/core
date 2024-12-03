import { BankTransactionMapping as TBankTransactionMapping } from "../api/bankTransactionMapping/BankTransactionMapping";

export const BANKTRANSACTIONMAPPING_TITLE_FIELD = "name";

export const BankTransactionMappingTitle = (
  record: TBankTransactionMapping
): string => {
  return record.name?.toString() || String(record.id);
};
