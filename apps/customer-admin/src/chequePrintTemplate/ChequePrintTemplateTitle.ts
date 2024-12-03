import { ChequePrintTemplate as TChequePrintTemplate } from "../api/chequePrintTemplate/ChequePrintTemplate";

export const CHEQUEPRINTTEMPLATE_TITLE_FIELD = "bankName";

export const ChequePrintTemplateTitle = (
  record: TChequePrintTemplate
): string => {
  return record.bankName?.toString() || String(record.id);
};
