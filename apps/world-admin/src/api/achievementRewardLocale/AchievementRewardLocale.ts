import { AchievementReward } from "../achievementReward/AchievementReward";

export type AchievementRewardLocale = {
  achievementRewards?: Array<AchievementReward>;
  body: string | null;
  createdAt: Date;
  id: string;
  locale: string | null;
  subject: string | null;
  updatedAt: Date;
};
