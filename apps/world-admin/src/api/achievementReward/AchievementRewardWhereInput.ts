import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AchievementRewardWhereInput = {
  body?: StringNullableFilter;
  id?: StringFilter;
  itemId?: IntNullableFilter;
  mailTemplateId?: IntNullableFilter;
  sender?: IntNullableFilter;
  subject?: StringNullableFilter;
  titleA?: IntNullableFilter;
  titleH?: IntNullableFilter;
};
