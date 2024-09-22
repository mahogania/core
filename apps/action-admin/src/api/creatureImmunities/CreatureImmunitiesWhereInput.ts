import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CreatureImmunitiesWhereInput = {
  auras?: StringNullableFilter;
  comment?: StringNullableFilter;
  dispelTypeMask?: IntNullableFilter;
  effects?: StringNullableFilter;
  id?: StringFilter;
  immuneAoE?: IntNullableFilter;
  immuneChain?: IntNullableFilter;
  mechanicsMask?: FloatNullableFilter;
  schoolMask?: IntNullableFilter;
};
