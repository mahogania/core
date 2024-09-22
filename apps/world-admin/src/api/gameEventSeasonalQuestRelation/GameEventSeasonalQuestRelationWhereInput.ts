import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameEventSeasonalQuestRelationWhereInput = {
  eventEntry?: IntNullableFilter;
  id?: StringFilter;
  questId?: IntNullableFilter;
};
