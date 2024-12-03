import { CreatureTemplateResistance as TCreatureTemplateResistance } from "../api/creatureTemplateResistance/CreatureTemplateResistance";

export const CREATURETEMPLATERESISTANCE_TITLE_FIELD = "id";

export const CreatureTemplateResistanceTitle = (
  record: TCreatureTemplateResistance
): string => {
  return record.id?.toString() || String(record.id);
};
