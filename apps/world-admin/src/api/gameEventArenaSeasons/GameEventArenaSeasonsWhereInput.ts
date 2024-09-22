import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameEventArenaSeasonsWhereInput = {
  eventEntry?: IntNullableFilter;
  id?: StringFilter;
  season?: IntNullableFilter;
};
