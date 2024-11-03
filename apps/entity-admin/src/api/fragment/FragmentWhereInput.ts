import { AttributeListRelationFilter } from "../attribute/AttributeListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TraitWhereUniqueInput } from "../trait/TraitWhereUniqueInput";
import { ViewListRelationFilter } from "../view/ViewListRelationFilter";

export type FragmentWhereInput = {
  attributes?: AttributeListRelationFilter;
  description?: StringNullableFilter;
  displayName?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  trait?: TraitWhereUniqueInput;
  views?: ViewListRelationFilter;
};
