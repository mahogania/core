import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameEventCreatureQuestWhereInput = {
  eventEntry?: IntNullableFilter;
  id?: StringFilter;
  quest?: IntNullableFilter;
};
