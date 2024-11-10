import { AchievementReward as TAchievementReward } from "../api/achievementReward/AchievementReward";

export const ACHIEVEMENTREWARD_TITLE_FIELD = "titleA";

export const AchievementRewardTitle = (record: TAchievementReward): string => {
  return record.titleA?.toString() || String(record.id);
};
