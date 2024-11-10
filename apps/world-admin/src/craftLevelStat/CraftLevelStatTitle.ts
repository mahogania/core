import { CraftLevelStat as TCraftLevelStat } from "../api/craftLevelStat/CraftLevelStat";

export const CRAFTLEVELSTAT_TITLE_FIELD = "stat";

export const CraftLevelStatTitle = (record: TCraftLevelStat): string => {
  return record.stat?.toString() || String(record.id);
};
