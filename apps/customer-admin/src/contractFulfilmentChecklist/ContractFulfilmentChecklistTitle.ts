import { ContractFulfilmentChecklist as TContractFulfilmentChecklist } from "../api/contractFulfilmentChecklist/ContractFulfilmentChecklist";

export const CONTRACTFULFILMENTCHECKLIST_TITLE_FIELD = "name";

export const ContractFulfilmentChecklistTitle = (
  record: TContractFulfilmentChecklist
): string => {
  return record.name?.toString() || String(record.id);
};
