import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccessRequirementWhereInput = {
  comment?: StringNullableFilter;
  completedAchievement?: IntNullableFilter;
  difficulty?: IntNullableFilter;
  failureText?: StringNullableFilter;
  id?: StringFilter;
  item?: IntNullableFilter;
  levelMax?: IntNullableFilter;
  levelMin?: IntNullableFilter;
  mapId?: IntNullableFilter;
  questDone?: IntNullableFilter;
};
