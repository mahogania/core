import { CreatureFormations as TCreatureFormations } from "../api/creatureFormations/CreatureFormations";

export const CREATUREFORMATIONS_TITLE_FIELD = "id";

export const CreatureFormationsTitle = (
  record: TCreatureFormations
): string => {
  return record.id?.toString() || String(record.id);
};
