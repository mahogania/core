import { ItemTemplateAddon as TItemTemplateAddon } from "../api/itemTemplateAddon/ItemTemplateAddon";

export const ITEMTEMPLATEADDON_TITLE_FIELD = "id";

export const ItemTemplateAddonTitle = (record: TItemTemplateAddon): string => {
  return record.id?.toString() || String(record.id);
};
