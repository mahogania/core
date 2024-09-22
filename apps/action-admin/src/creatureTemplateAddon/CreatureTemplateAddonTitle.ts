import { CreatureTemplateAddon as TCreatureTemplateAddon } from "../api/creatureTemplateAddon/CreatureTemplateAddon";

export const CREATURETEMPLATEADDON_TITLE_FIELD = "id";

export const CreatureTemplateAddonTitle = (
  record: TCreatureTemplateAddon
): string => {
  return record.id?.toString() || String(record.id);
};
