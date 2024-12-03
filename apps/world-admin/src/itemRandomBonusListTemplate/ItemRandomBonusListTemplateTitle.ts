import { ItemRandomBonusListTemplate as TItemRandomBonusListTemplate } from "../api/itemRandomBonusListTemplate/ItemRandomBonusListTemplate";

export const ITEMRANDOMBONUSLISTTEMPLATE_TITLE_FIELD = "id";

export const ItemRandomBonusListTemplateTitle = (
  record: TItemRandomBonusListTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
