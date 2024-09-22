import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreatureAddonWhereInput = {
  aiAnimKit?: IntNullableFilter;
  animTier?: IntNullableFilter;
  auras?: StringNullableFilter;
  emote?: IntNullableFilter;
  guid?: FloatNullableFilter;
  id?: StringFilter;
  meleeAnimKit?: IntNullableFilter;
  mount?: IntNullableFilter;
  mountCreatureId?: IntNullableFilter;
  movementAnimKit?: IntNullableFilter;
  pathId?: IntNullableFilter;
  pvPFlags?: IntNullableFilter;
  sheathState?: IntNullableFilter;
  standState?: IntNullableFilter;
  visFlags?: IntNullableFilter;
  visibilityDistanceType?: IntNullableFilter;
};
