import { ItemTaxTemplate as TItemTaxTemplate } from "../api/itemTaxTemplate/ItemTaxTemplate";

export const ITEMTAXTEMPLATE_TITLE_FIELD = "name";

export const ItemTaxTemplateTitle = (record: TItemTaxTemplate): string => {
  return record.name?.toString() || String(record.id);
};
