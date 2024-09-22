import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AchievementWhereInput = {
  count?: IntNullableFilter;
  flags?: IntNullableFilter;
  id?: StringFilter;
  map?: IntNullableFilter;
  points?: IntNullableFilter;
  refAchievement?: IntNullableFilter;
  requiredFaction?: IntNullableFilter;
};
