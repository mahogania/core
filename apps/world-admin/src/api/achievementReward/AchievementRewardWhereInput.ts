import { AchievementRewardLocaleWhereUniqueInput } from "../achievementRewardLocale/AchievementRewardLocaleWhereUniqueInput";
import { AchievementListRelationFilter } from "../achievement/AchievementListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AchievementRewardWhereInput = {
  achievementRewardLocales?: AchievementRewardLocaleWhereUniqueInput;
  achievements?: AchievementListRelationFilter;
  body?: StringNullableFilter;
  id?: StringFilter;
  itemId?: IntNullableFilter;
  mailTemplateId?: IntNullableFilter;
  sender?: IntNullableFilter;
  subject?: StringNullableFilter;
  titleA?: IntNullableFilter;
  titleH?: IntNullableFilter;
};
