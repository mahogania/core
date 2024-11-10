import { CreatureLevelStat as TCreatureLevelStat } from "../api/creatureLevelStat/CreatureLevelStat";

export const CREATURELEVELSTAT_TITLE_FIELD = "id";

export const CreatureLevelStatTitle = (record: TCreatureLevelStat): string => {
  return record.id?.toString() || String(record.id);
};
