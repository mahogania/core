import { StringFilter } from "../../util/StringFilter";
import { OptionListRelationFilter } from "../option/OptionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  options?: OptionListRelationFilter;
  version?: StringNullableFilter;
};
