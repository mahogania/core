import { PlayerXpForLevel as TPlayerXpForLevel } from "../api/playerXpForLevel/PlayerXpForLevel";

export const PLAYERXPFORLEVEL_TITLE_FIELD = "id";

export const PlayerXpForLevelTitle = (record: TPlayerXpForLevel): string => {
  return record.id?.toString() || String(record.id);
};
