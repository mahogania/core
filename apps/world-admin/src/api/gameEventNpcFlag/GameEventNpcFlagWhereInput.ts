import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameEventNpcFlagWhereInput = {
  eventEntry?: IntNullableFilter;
  guid?: IntNullableFilter;
  id?: StringFilter;
  npcflag?: IntNullableFilter;
};
