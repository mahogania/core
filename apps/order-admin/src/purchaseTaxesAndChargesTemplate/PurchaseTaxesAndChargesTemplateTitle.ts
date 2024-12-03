import { PurchaseTaxesAndChargesTemplate as TPurchaseTaxesAndChargesTemplate } from "../api/purchaseTaxesAndChargesTemplate/PurchaseTaxesAndChargesTemplate";

export const PURCHASETAXESANDCHARGESTEMPLATE_TITLE_FIELD = "name";

export const PurchaseTaxesAndChargesTemplateTitle = (
  record: TPurchaseTaxesAndChargesTemplate
): string => {
  return record.name?.toString() || String(record.id);
};
