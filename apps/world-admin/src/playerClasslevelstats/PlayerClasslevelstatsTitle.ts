import { PlayerClasslevelstats as TPlayerClasslevelstats } from "../api/playerClasslevelstats/PlayerClasslevelstats";

export const PLAYERCLASSLEVELSTATS_TITLE_FIELD = "id";

export const PlayerClasslevelstatsTitle = (
  record: TPlayerClasslevelstats
): string => {
  return record.id?.toString() || String(record.id);
};
