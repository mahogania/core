import { AchievementRewardLocale } from "../achievementRewardLocale/AchievementRewardLocale";
import { Achievement } from "../achievement/Achievement";

export type AchievementReward = {
  achievementRewardLocales?: AchievementRewardLocale | null;
  achievements?: Array<Achievement>;
  body: string | null;
  createdAt: Date;
  id: string;
  itemId: number | null;
  mailTemplateId: number | null;
  sender: number | null;
  subject: string | null;
  titleA: number | null;
  titleH: number | null;
  updatedAt: Date;
};
