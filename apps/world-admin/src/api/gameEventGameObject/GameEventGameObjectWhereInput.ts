import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameEventGameObjectWhereInput = {
  eventEntry?: IntNullableFilter;
  guid?: IntNullableFilter;
  id?: StringFilter;
};
