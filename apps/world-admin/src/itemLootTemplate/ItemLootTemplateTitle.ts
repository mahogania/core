import { ItemLootTemplate as TItemLootTemplate } from "../api/itemLootTemplate/ItemLootTemplate";

export const ITEMLOOTTEMPLATE_TITLE_FIELD = "id";

export const ItemLootTemplateTitle = (record: TItemLootTemplate): string => {
  return record.id?.toString() || String(record.id);
};
