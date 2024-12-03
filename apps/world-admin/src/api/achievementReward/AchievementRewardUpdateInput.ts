import { AchievementRewardLocaleWhereUniqueInput } from "../achievementRewardLocale/AchievementRewardLocaleWhereUniqueInput";
import { AchievementUpdateManyWithoutAchievementRewardsInput } from "./AchievementUpdateManyWithoutAchievementRewardsInput";

export type AchievementRewardUpdateInput = {
  achievementRewardLocales?: AchievementRewardLocaleWhereUniqueInput | null;
  achievements?: AchievementUpdateManyWithoutAchievementRewardsInput;
  body?: string | null;
  itemId?: number | null;
  mailTemplateId?: number | null;
  sender?: number | null;
  subject?: string | null;
  titleA?: number | null;
  titleH?: number | null;
};
