import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameEventPoolWhereInput = {
  eventEntry?: IntNullableFilter;
  id?: StringFilter;
  poolEntry?: IntNullableFilter;
};
