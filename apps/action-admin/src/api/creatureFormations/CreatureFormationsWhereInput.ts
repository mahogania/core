import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreatureFormationsWhereInput = {
  angle?: FloatNullableFilter;
  dist?: FloatNullableFilter;
  groupAi?: IntNullableFilter;
  id?: StringFilter;
  leaderGuid?: FloatNullableFilter;
  memberGuid?: FloatNullableFilter;
  point_1?: IntNullableFilter;
  point_2?: IntNullableFilter;
};
