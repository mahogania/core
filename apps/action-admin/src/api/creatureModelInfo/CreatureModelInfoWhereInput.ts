import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreatureModelInfoWhereInput = {
  boundingRadius?: FloatNullableFilter;
  combatReach?: FloatNullableFilter;
  displayId?: IntNullableFilter;
  displayIdOtherGender?: IntNullableFilter;
  id?: StringFilter;
  verifiedBuild?: IntNullableFilter;
};
