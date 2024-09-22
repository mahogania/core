import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AchievementScriptsWhereInput = {
  achievementId?: IntNullableFilter;
  id?: StringFilter;
  scriptName?: StringNullableFilter;
};
