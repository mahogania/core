import { PlayerFactionAchievement as TPlayerFactionAchievement } from "../api/playerFactionAchievement/PlayerFactionAchievement";

export const PLAYERFACTIONACHIEVEMENT_TITLE_FIELD = "id";

export const PlayerFactionAchievementTitle = (
  record: TPlayerFactionAchievement
): string => {
  return record.id?.toString() || String(record.id);
};
