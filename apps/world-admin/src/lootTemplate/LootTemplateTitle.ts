import { LootTemplate as TLootTemplate } from "../api/lootTemplate/LootTemplate";

export const LOOTTEMPLATE_TITLE_FIELD = "comment";

export const LootTemplateTitle = (record: TLootTemplate): string => {
  return record.comment?.toString() || String(record.id);
};
