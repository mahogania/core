import { BankGuarantee as TBankGuarantee } from "../api/bankGuarantee/BankGuarantee";

export const BANKGUARANTEE_TITLE_FIELD = "name";

export const BankGuaranteeTitle = (record: TBankGuarantee): string => {
  return record.name?.toString() || String(record.id);
};
