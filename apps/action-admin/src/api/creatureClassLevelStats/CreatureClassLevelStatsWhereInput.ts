import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreatureClassLevelStatsWhereInput = {
  attackpower?: IntNullableFilter;
  basemana?: IntNullableFilter;
  classField?: IntNullableFilter;
  comment?: StringNullableFilter;
  id?: StringFilter;
  level?: IntNullableFilter;
  rangedattackpower?: IntNullableFilter;
};
