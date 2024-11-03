import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ZoneListRelationFilter } from "../zone/ZoneListRelationFilter";

export type MapWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  zones?: ZoneListRelationFilter;
};
