import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CreatureListRelationFilter } from "../creature/CreatureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreatureLevelStatWhereInput = {
  Prana?: IntNullableFilter;
  comment?: StringNullableFilter;
  creatures?: CreatureListRelationFilter;
  id?: StringFilter;
  kind?: IntNullableFilter;
  level?: IntNullableFilter;
  power?: IntNullableFilter;
};
