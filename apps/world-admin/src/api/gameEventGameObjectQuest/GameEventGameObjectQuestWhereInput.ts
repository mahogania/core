import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameEventGameObjectQuestWhereInput = {
  eventEntry?: IntNullableFilter;
  id?: StringFilter;
  quest?: IntNullableFilter;
};
