import { DisenchantLootTemplate as TDisenchantLootTemplate } from "../api/disenchantLootTemplate/DisenchantLootTemplate";

export const DISENCHANTLOOTTEMPLATE_TITLE_FIELD = "comment";

export const DisenchantLootTemplateTitle = (
  record: TDisenchantLootTemplate
): string => {
  return record.comment?.toString() || String(record.id);
};
