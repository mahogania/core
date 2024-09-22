import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AchievementRewardLocaleWhereInput = {
  body?: StringNullableFilter;
  id?: StringFilter;
  locale?: StringNullableFilter;
  subject?: StringNullableFilter;
};
