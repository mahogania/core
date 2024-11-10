import { AchievementRewardListRelationFilter } from "../achievementReward/AchievementRewardListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AchievementRewardLocaleWhereInput = {
  achievementRewards?: AchievementRewardListRelationFilter;
  body?: StringNullableFilter;
  id?: StringFilter;
  locale?: StringNullableFilter;
  subject?: StringNullableFilter;
};
