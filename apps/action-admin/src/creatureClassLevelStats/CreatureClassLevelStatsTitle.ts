import { CreatureClassLevelStats as TCreatureClassLevelStats } from "../api/creatureClassLevelStats/CreatureClassLevelStats";

export const CREATURECLASSLEVELSTATS_TITLE_FIELD = "id";

export const CreatureClassLevelStatsTitle = (
  record: TCreatureClassLevelStats
): string => {
  return record.id?.toString() || String(record.id);
};
