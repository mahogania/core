import { ItemTemplate as TItemTemplate } from "../api/itemTemplate/ItemTemplate";

export const ITEMTEMPLATE_TITLE_FIELD = "id";

export const ItemTemplateTitle = (record: TItemTemplate): string => {
  return record.id?.toString() || String(record.id);
};
