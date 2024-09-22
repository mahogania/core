import { CreatureImmunities as TCreatureImmunities } from "../api/creatureImmunities/CreatureImmunities";

export const CREATUREIMMUNITIES_TITLE_FIELD = "id";

export const CreatureImmunitiesTitle = (
  record: TCreatureImmunities
): string => {
  return record.id?.toString() || String(record.id);
};
