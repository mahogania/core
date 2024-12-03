import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AreaTriggerCreatePropertiesPolygonVertexWhereInput = {
  areaTriggerCreatePropertiesId?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isCustom?: BooleanNullableFilter;
  verifiedBuild?: IntNullableFilter;
  verticeTargetX?: FloatNullableFilter;
  verticeTargetY?: FloatNullableFilter;
  verticeX?: FloatNullableFilter;
  verticeY?: FloatNullableFilter;
};
