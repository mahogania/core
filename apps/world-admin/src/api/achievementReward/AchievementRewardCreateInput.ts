import { AchievementRewardLocaleWhereUniqueInput } from "../achievementRewardLocale/AchievementRewardLocaleWhereUniqueInput";
import { AchievementCreateNestedManyWithoutAchievementRewardsInput } from "./AchievementCreateNestedManyWithoutAchievementRewardsInput";

export type AchievementRewardCreateInput = {
  achievementRewardLocales?: AchievementRewardLocaleWhereUniqueInput | null;
  achievements?: AchievementCreateNestedManyWithoutAchievementRewardsInput;
  body?: string | null;
  itemId?: number | null;
  mailTemplateId?: number | null;
  sender?: number | null;
  subject?: string | null;
  titleA?: number | null;
  titleH?: number | null;
};
