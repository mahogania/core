import { CreatureText as TCreatureText } from "../api/creatureText/CreatureText";

export const CREATURETEXT_TITLE_FIELD = "id";

export const CreatureTextTitle = (record: TCreatureText): string => {
  return record.id?.toString() || String(record.id);
};
