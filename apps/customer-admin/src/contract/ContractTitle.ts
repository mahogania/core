import { Contract as TContract } from "../api/contract/Contract";

export const CONTRACT_TITLE_FIELD = "documentName";

export const ContractTitle = (record: TContract): string => {
  return record.documentName?.toString() || String(record.id);
};
