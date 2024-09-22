import { PlayerFactionchangeAchievement as TPlayerFactionchangeAchievement } from "../api/playerFactionchangeAchievement/PlayerFactionchangeAchievement";

export const PLAYERFACTIONCHANGEACHIEVEMENT_TITLE_FIELD = "id";

export const PlayerFactionchangeAchievementTitle = (
  record: TPlayerFactionchangeAchievement
): string => {
  return record.id?.toString() || String(record.id);
};
