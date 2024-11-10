import { ContractTemplateFulfilmentTerms as TContractTemplateFulfilmentTerms } from "../api/contractTemplateFulfilmentTerms/ContractTemplateFulfilmentTerms";

export const CONTRACTTEMPLATEFULFILMENTTERMS_TITLE_FIELD = "name";

export const ContractTemplateFulfilmentTermsTitle = (
  record: TContractTemplateFulfilmentTerms
): string => {
  return record.name?.toString() || String(record.id);
};
