import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CreatureMovementOverrideWhereInput = {
  chase?: IntNullableFilter;
  flight?: IntNullableFilter;
  ground?: IntNullableFilter;
  id?: StringFilter;
  interactionPauseTimer?: IntNullableFilter;
  random?: IntNullableFilter;
  rooted?: IntNullableFilter;
  spawnId?: FloatNullableFilter;
  swim?: IntNullableFilter;
};
