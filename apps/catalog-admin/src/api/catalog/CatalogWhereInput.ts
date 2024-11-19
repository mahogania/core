import { ConfigurationListRelationFilter } from "../configuration/ConfigurationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type CatalogWhereInput = {
  configurations?: ConfigurationListRelationFilter;
  description?: StringNullableFilter;
  displayName?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  unit?: UnitWhereUniqueInput;
};
