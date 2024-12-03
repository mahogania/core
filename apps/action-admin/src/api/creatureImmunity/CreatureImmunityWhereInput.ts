import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CreatureListRelationFilter } from "../creature/CreatureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreatureImmunityWhereInput = {
  auras?: StringNullableFilter;
  comment?: StringNullableFilter;
  creatures?: CreatureListRelationFilter;
  dispelMask?: StringFilter;
  effects?: StringNullableFilter;
  id?: StringFilter;
  mechanicMask?: StringFilter;
  schoolMask?: StringFilter;
};
