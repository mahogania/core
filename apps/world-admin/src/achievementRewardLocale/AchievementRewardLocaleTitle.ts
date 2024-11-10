import { AchievementRewardLocale as TAchievementRewardLocale } from "../api/achievementRewardLocale/AchievementRewardLocale";

export const ACHIEVEMENTREWARDLOCALE_TITLE_FIELD = "locale";

export const AchievementRewardLocaleTitle = (
  record: TAchievementRewardLocale
): string => {
  return record.locale?.toString() || String(record.id);
};
