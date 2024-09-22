import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type GameTeleWhereInput = {
  id?: StringFilter;
  map?: IntNullableFilter;
  name?: StringNullableFilter;
  orientation?: FloatNullableFilter;
  positionX?: FloatNullableFilter;
  positionY?: FloatNullableFilter;
  positionZ?: FloatNullableFilter;
};
