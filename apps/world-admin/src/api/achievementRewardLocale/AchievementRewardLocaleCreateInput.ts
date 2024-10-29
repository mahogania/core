import { AchievementRewardCreateNestedManyWithoutAchievementRewardLocalesInput } from "./AchievementRewardCreateNestedManyWithoutAchievementRewardLocalesInput";

export type AchievementRewardLocaleCreateInput = {
  achievementRewards?: AchievementRewardCreateNestedManyWithoutAchievementRewardLocalesInput;
  body?: string | null;
  locale?: string | null;
  subject?: string | null;
};
