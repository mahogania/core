import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameEventCreatureWhereInput = {
  eventEntry?: IntNullableFilter;
  guid?: IntNullableFilter;
  id?: StringFilter;
};
