import { StringFilter } from "../../util/StringFilter";
import { OptionListRelationFilter } from "../option/OptionListRelationFilter";
import { ConstraintWhereUniqueInput } from "../constraint/ConstraintWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  options?: OptionListRelationFilter;
  predecessorProductPaths?: ConstraintWhereUniqueInput;
  successorProductPaths?: ConstraintWhereUniqueInput;
  version?: StringNullableFilter;
};
