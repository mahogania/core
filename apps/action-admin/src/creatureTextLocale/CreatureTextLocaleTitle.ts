import { CreatureTextLocale as TCreatureTextLocale } from "../api/creatureTextLocale/CreatureTextLocale";

export const CREATURETEXTLOCALE_TITLE_FIELD = "id";

export const CreatureTextLocaleTitle = (
  record: TCreatureTextLocale
): string => {
  return record.id?.toString() || String(record.id);
};
