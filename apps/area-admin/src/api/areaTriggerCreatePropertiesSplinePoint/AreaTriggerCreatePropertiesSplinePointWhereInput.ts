import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AreaTriggerCreatePropertiesSplinePointWhereInput = {
  areaTriggerCreatePropertiesId?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isCustom?: BooleanNullableFilter;
  verifiedBuild?: IntNullableFilter;
  x?: FloatNullableFilter;
  y?: FloatNullableFilter;
  z?: FloatNullableFilter;
};
