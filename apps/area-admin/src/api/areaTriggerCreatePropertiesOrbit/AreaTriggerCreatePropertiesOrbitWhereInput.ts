import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AreaTriggerCreatePropertiesOrbitWhereInput = {
  areaTriggerCreatePropertiesId?: IntNullableFilter;
  blendFromRadius?: FloatNullableFilter;
  canLoop?: BooleanNullableFilter;
  circleRadius?: FloatNullableFilter;
  counterClockwise?: BooleanNullableFilter;
  id?: StringFilter;
  initialAngle?: FloatNullableFilter;
  isCustom?: BooleanNullableFilter;
  startDelay?: IntNullableFilter;
  verifiedBuild?: IntNullableFilter;
  zOffset?: FloatNullableFilter;
};
