import { CreatureTemplateLocale as TCreatureTemplateLocale } from "../api/creatureTemplateLocale/CreatureTemplateLocale";

export const CREATURETEMPLATELOCALE_TITLE_FIELD = "id";

export const CreatureTemplateLocaleTitle = (
  record: TCreatureTemplateLocale
): string => {
  return record.id?.toString() || String(record.id);
};
