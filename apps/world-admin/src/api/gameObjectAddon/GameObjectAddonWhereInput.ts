import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type GameObjectAddonWhereInput = {
  aiAnimKitId?: IntNullableFilter;
  guid?: IntNullableFilter;
  id?: StringFilter;
  invisibilityType?: IntNullableFilter;
  invisibilityValue?: IntNullableFilter;
  parentRotation0?: FloatNullableFilter;
  parentRotation1?: FloatNullableFilter;
  parentRotation2?: FloatNullableFilter;
  parentRotation3?: FloatNullableFilter;
  worldEffectId?: IntNullableFilter;
};
