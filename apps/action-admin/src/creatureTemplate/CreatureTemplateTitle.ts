import { CreatureTemplate as TCreatureTemplate } from "../api/creatureTemplate/CreatureTemplate";

export const CREATURETEMPLATE_TITLE_FIELD = "id";

export const CreatureTemplateTitle = (record: TCreatureTemplate): string => {
  return record.id?.toString() || String(record.id);
};
