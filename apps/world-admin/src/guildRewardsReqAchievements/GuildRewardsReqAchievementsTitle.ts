import { GuildRewardsReqAchievements as TGuildRewardsReqAchievements } from "../api/guildRewardsReqAchievements/GuildRewardsReqAchievements";

export const GUILDREWARDSREQACHIEVEMENTS_TITLE_FIELD = "id";

export const GuildRewardsReqAchievementsTitle = (
  record: TGuildRewardsReqAchievements
): string => {
  return record.id?.toString() || String(record.id);
};
