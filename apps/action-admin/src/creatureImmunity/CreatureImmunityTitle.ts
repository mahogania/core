import { CreatureImmunity as TCreatureImmunity } from "../api/creatureImmunity/CreatureImmunity";

export const CREATUREIMMUNITY_TITLE_FIELD = "auras";

export const CreatureImmunityTitle = (record: TCreatureImmunity): string => {
  return record.auras?.toString() || String(record.id);
};
