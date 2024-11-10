import { ItemTaxTemplateDetail as TItemTaxTemplateDetail } from "../api/itemTaxTemplateDetail/ItemTaxTemplateDetail";

export const ITEMTAXTEMPLATEDETAIL_TITLE_FIELD = "name";

export const ItemTaxTemplateDetailTitle = (
  record: TItemTaxTemplateDetail
): string => {
  return record.name?.toString() || String(record.id);
};
